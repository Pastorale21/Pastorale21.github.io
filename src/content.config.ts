import { defineCollection, z } from "astro:content";
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: "./src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      draft: z.boolean().optional(),
      tags: z.array(z.string()).optional(),
      // Optional co-located cover image, run through astro:assets. Posts
      // without it fall back to the first inline image (getFirstImage).
      cover: image().optional(),
    }),
});

export const collections = { blog };
