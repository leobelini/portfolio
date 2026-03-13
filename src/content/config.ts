import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { OBSIDIAN_VAULT_PATH } from "astro:env/server";

const blog = defineCollection({
  loader: glob({ pattern: ["**/*.md", "!**/*.excalidraw.md"], base: OBSIDIAN_VAULT_PATH }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date()
  })
});

export const collections = { blog };