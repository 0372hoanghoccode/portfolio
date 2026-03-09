import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tech: z.array(z.string()),
    github: z.string().url().optional(),
    live: z.string().url().optional(),
    featured: z.boolean().default(false),
    status: z.enum(['active', 'archived', 'wip']).default('active'),
    stats: z.record(z.string()).optional(),
    date: z.coerce.date(),
    order: z.number().default(0),
  }),
});

export const collections = { projects };
