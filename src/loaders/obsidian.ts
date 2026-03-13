import type { Loader } from 'astro/loaders';
import { z } from 'astro:content';
import fg from 'fast-glob';
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { createShortHash, createSlug, slugify } from '../utils/strings';

interface GlobOptions {
  pattern: string | string[];
  base?: string;
  publicAssetsDir?: string;
}

interface AssetToCopy {
  sourcePath: string;
  destinationPath: string;
  publicUrl: string;
}

type PublicAssetRegistry = Map<string, string>;



function toPosixPath(value: string) {
  return value.split(path.sep).join('/');
}

function getSafeRelativePath(basePath: string, targetPath: string) {
  const relativePath = path.relative(basePath, targetPath);

  if (relativePath.startsWith('..') || path.isAbsolute(relativePath)) {
    return path.basename(targetPath);
  }

  return relativePath;
}

function sanitizePathSegment(segment: string) {
  const extension = path.extname(segment).toLowerCase();
  const baseName = path.basename(segment, extension);
  const cleanBaseName = slugify(baseName) || 'file';

  if (!extension) {
    return cleanBaseName;
  }

  return `${cleanBaseName}${extension}`;
}

function sanitizeRelativePath(relativePath: string) {
  const normalized = toPosixPath(path.normalize(relativePath));

  return normalized
    .split('/')
    .filter((segment) => segment && segment !== '.' && segment !== '..')
    .map((segment) => sanitizePathSegment(segment))
    .join('/');
}


function appendSuffixToPublicPath(publicPath: string, suffix: string) {
  const extension = path.posix.extname(publicPath);
  const withoutExtension = extension ? publicPath.slice(0, -extension.length) : publicPath;

  return `${withoutExtension}-${suffix}${extension}`;
}

function ensureUniquePublicPath(
  publicPath: string,
  sourcePath: string,
  registry: PublicAssetRegistry,
) {
  const existingSourcePath = registry.get(publicPath);

  if (!existingSourcePath || existingSourcePath === sourcePath) {
    registry.set(publicPath, sourcePath);
    return publicPath;
  }

  const hash = createShortHash(sourcePath);
  let suffixIndex = 1;
  let candidate = appendSuffixToPublicPath(publicPath, hash);

  while (registry.has(candidate) && registry.get(candidate) !== sourcePath) {
    suffixIndex += 1;
    candidate = appendSuffixToPublicPath(publicPath, `${hash}-${suffixIndex}`);
  }

  registry.set(candidate, sourcePath);

  return candidate;
}

function transformObsidian(
  filePath: string,
  content: string,
  vaultBasePath: string,
  publicAssetsDir: string,
  publicAssetRegistry: PublicAssetRegistry,
) {
  let result = content;
  const assetsToCopy: AssetToCopy[] = [];

  // ![[embed]]
  result = result.replace(/!\[\[(.*?)\]\]/g, (_, target) => {
    const file = target.split('|')[0].trim();
    const sourcePath = path.resolve(path.dirname(filePath), file);
    const safeRelativePath = getSafeRelativePath(vaultBasePath, sourcePath);
    const sanitizedRelativePath = sanitizeRelativePath(safeRelativePath);
    const requestedPublicPath = toPosixPath(path.join(publicAssetsDir, sanitizedRelativePath));
    const publicFilePath = ensureUniquePublicPath(
      requestedPublicPath,
      sourcePath,
      publicAssetRegistry,
    );
    const destinationPath = path.resolve(process.cwd(), 'public', publicFilePath);
    const publicUrl = `/${publicFilePath}`;

    assetsToCopy.push({
      sourcePath,
      destinationPath,
      publicUrl,
    });

    if (isImage(file)) {
      return `<img src="${publicUrl}" alt="${path.basename(file)}" />`;
    }

    return `[Download](${publicUrl})`;
  });

  // [[link]]
  result = result.replace(/\[\[(.*?)\]\]/g, (_, link) => {
    const [target, label] = link.split('|');

    const slug = slugify(target);

    return `[${label ?? target}](/blog/${slug})`;
  });

  return {
    content: result,
    assetsToCopy,
  };
}

function isImage(file: string) {
  return /\.(gif|jpe?g|tiff?|png|webp|bmp|svg)$/i.test(file);
}

export const obsidianLoader = (globOptions: GlobOptions): Loader => ({
  name: 'astro-loader-obsidian-md',

  async load(context) {
    const { pattern, base = '.', publicAssetsDir = 'obsidian-assets' } = globOptions;
    const vaultBasePath = path.resolve(base);
    const copiedAssets = new Set<string>();
    const publicAssetRegistry: PublicAssetRegistry = new Map();

    const files = await fg(pattern, {
      cwd: base,
      absolute: true,
    });

    for (const file of files) {
      const raw = await fs.readFile(file, 'utf-8');

      const { data, content } = matter(raw);
      if (!data.slug) {
        data.slug = createSlug(data.title || path.basename(file, path.extname(file)));
      }

      const transformed = transformObsidian(
        file,
        content,
        vaultBasePath,
        publicAssetsDir,
        publicAssetRegistry,
      );

      for (const asset of transformed.assetsToCopy) {
        if (copiedAssets.has(asset.destinationPath)) {
          continue;
        }

        await fs.mkdir(path.dirname(asset.destinationPath), { recursive: true });
        await fs.copyFile(asset.sourcePath, asset.destinationPath);
        copiedAssets.add(asset.destinationPath);
      }

      const slug = data.slug;

      const rendered = await context.renderMarkdown(transformed.content);

      context.store.set({
        id: slug,
        data,
        body: transformed.content,
        rendered,
      });
    }
  },

  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.date(),
    slug: z.string(),
  }),
});
