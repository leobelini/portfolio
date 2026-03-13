import type { LoaderContext } from "astro/loaders";
import fs from 'fs/promises';
import fg from 'fast-glob';
import matter from 'gray-matter';
import path from 'path';

import type { GlobOptions, PublicAssetRegistry } from "./obsidian";
import { createSlug } from "../../utils/strings";
import { transformObsidian } from "./transform";

export const load: (context: LoaderContext, globOptions: GlobOptions) => Promise<void> = async (context, globOptions) => {
    const { pattern, base = '.', publicAssetsDir = 'obsidian-assets' } = globOptions;
        const vaultBasePath = path.resolve(base);
        const copiedAssets = new Set<string>();
        const publicAssetRegistry: PublicAssetRegistry = new Map();
    
        // Avoid stale entries during dev reloads when IDs or source files change.
        context.store.clear();
    
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
}