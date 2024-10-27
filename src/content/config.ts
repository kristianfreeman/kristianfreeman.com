import { defineCollection, reference, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    draft: z.boolean().optional(),
    pubDate: z.coerce.date(),
    tags: z.array(reference("tag")),
  }),
});

const tag = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
  }),
});

const page = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    heroImage: z.string().optional(),
  }),
});

export const collections = {
  blog,
  page,
  tag,
};
