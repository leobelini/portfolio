import type { Loader } from 'astro/loaders';
import type { GlobOptions } from './obsidian';

import { z } from 'astro:content';
import { load } from './load';

export const obsidianLoaderSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  pubDate: z.date(),
  slug: z.string(),
});

export const obsidianLoader = (globOptions: GlobOptions): Loader => ({
  name: 'astro-loader-obsidian-md',
  load: (context) => load(context, globOptions),
  schema: obsidianLoaderSchema,
});
