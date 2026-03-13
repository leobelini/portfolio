import { defineCollection } from 'astro:content';
import { OBSIDIAN_VAULT_PATH } from 'astro:env/server';
import { obsidianLoader, obsidianLoaderSchema } from '../loaders/obsidian';

const blog = defineCollection({
  loader: obsidianLoader({
    base: OBSIDIAN_VAULT_PATH,
    publicAssetsDir: 'obsidian',
    pattern: ['**/*.md', '!**/*.excalidraw.md'],
  }),
  schema: obsidianLoaderSchema,
});

export const collections = { blog };
