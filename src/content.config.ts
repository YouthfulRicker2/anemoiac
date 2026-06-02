import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const releases = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/releases" }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    cover: z.string().optional(),
    bandcamp: z.string().optional(),
    spotify: z.string().optional(),
    "apple-music": z.string().optional(),
    "youtube-music": z.string().optional(),
    deezer: z.string().optional(),
    tidal: z.string().optional(),
    "amazon-music": z.string().optional(),
    soundcloud: z.string().optional(),
    qobuz: z.string().optional(),
    anghami: z.string().optional(),
  }),
});

export const collections = { releases };