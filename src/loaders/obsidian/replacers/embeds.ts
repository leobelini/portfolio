import path from 'path';
import { createShortHash, slugify } from '../../../utils/strings';
import type { PublicAssetRegistry } from '../obsidian';

function resolveSafeRelativePath(basePath: string, targetPath: string) {
  const relativePath = path.relative(basePath, targetPath);

  if (relativePath.startsWith('..') || path.isAbsolute(relativePath)) {
    return path.basename(targetPath);
  }

  return relativePath;
}

function normalizeToPosixPath(value: string) {
  return value.split(path.sep).join('/');
}

function sanitizeSegment(segment: string) {
  const extension = path.extname(segment).toLowerCase();
  const baseName = path.basename(segment, extension);
  const cleanBaseName = slugify(baseName) || 'file';

  if (!extension) {
    return cleanBaseName;
  }

  return `${cleanBaseName}${extension}`;
}

function sanitizePath(relativePath: string) {
  const normalized = normalizeToPosixPath(path.normalize(relativePath));

  return normalized
    .split('/')
    .filter((segment) => segment && segment !== '.' && segment !== '..')
    .map((segment) => sanitizeSegment(segment))
    .join('/');
}

function buildPathWithSuffix(publicPath: string, suffix: string) {
  const extension = path.posix.extname(publicPath);
  const withoutExtension = extension ? publicPath.slice(0, -extension.length) : publicPath;

  return `${withoutExtension}-${suffix}${extension}`;
}


function resolveUniquePublicPath(
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
  let candidate = buildPathWithSuffix(publicPath, hash);

  while (registry.has(candidate) && registry.get(candidate) !== sourcePath) {
    suffixIndex += 1;
    candidate = buildPathWithSuffix(publicPath, `${hash}-${suffixIndex}`);
  }

  registry.set(candidate, sourcePath);

  return candidate;
}

function isImageFile(file: string) {
  return /\.(gif|jpe?g|tiff?|png|webp|bmp|svg)$/i.test(file);
}

export const replaceObsidianEmbeds = (result: string, filePath: string, vaultBasePath: string, publicAssetsDir: string, publicAssetRegistry: Map<string, string>, assetsToCopy: Array<{ sourcePath: string; destinationPath: string; publicUrl: string }>) => {
  return result.replace(/!\[\[(.*?)\]\]/g, (_, target) => {
      const file = target.split('|')[0].trim();
      const sourcePath = path.resolve(path.dirname(filePath), file);
      const safeRelativePath = resolveSafeRelativePath(vaultBasePath, sourcePath);
      const sanitizedRelativePath = sanitizePath(safeRelativePath);
      const requestedPublicPath = normalizeToPosixPath(path.join(publicAssetsDir, sanitizedRelativePath));
      const publicFilePath = resolveUniquePublicPath(
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
  
      if (isImageFile(file)) {
        return `<img src="${publicUrl}" alt="${path.basename(file)}" />`;
      }
  
      return `[Download](${publicUrl})`;
    });
};