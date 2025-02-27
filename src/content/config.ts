import { defineCollection, reference, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    draft: z.boolean().optional(),
    pubDate: z.coerce.date(),
    tags: z.array(reference("tag")),
    repo: z.object({
      path: z.string(),
      status: z.enum(["active", "archived"]).default("active"),
    }).optional(),
  }),
});

const tag = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    description: z.string(),
    warning: z
      .object({
        title: z.string(),
        description: z.string(),
      })
      .optional(),
  }),
});

const page = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = {
  blog,
  page,
  tag,
};
