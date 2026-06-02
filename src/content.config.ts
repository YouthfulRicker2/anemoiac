import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const releases = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/releases" }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    cover: z.string().optional(),
    spotify: z.string().optional(),
    soundcloud: z.string().optional(),
  }),
});

export const collections = { releases };
