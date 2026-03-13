import { defineCollection, z } from "astro:content";
import { OBSIDIAN_VAULT_PATH } from "astro:env/server";
import { obsidianLoader } from "../loaders/obsidian";

const blog = defineCollection({
  loader: obsidianLoader({
    base: OBSIDIAN_VAULT_PATH,
    publicAssetsDir: "obsidian",
    pattern: ["**/*.md", "!**/*.excalidraw.md"],
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    slug: z.string(),
  })
});

export const collections = { blog };