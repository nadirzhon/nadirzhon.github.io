import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const cases = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/cases' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    lang: z.enum(['ru', 'en']),
    year: z.number(),
    role: z.string(),
    industry: z.string(),
    /** slug услуги, к которой относится кейс */
    service: z.string(),
    /** Проверяемые результаты. Пишите только то, что можете подтвердить. */
    outcomes: z.array(z.object({ value: z.string(), label: z.string() })).max(4),
    stack: z.array(z.string()),
    /** Обложка: снимок работающей системы. Без неё кейс — просто текст. */
    cover: z.string().optional(),
    order: z.number().default(99),
    draft: z.boolean().default(false),
  }),
});

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    lang: z.enum(['ru', 'en']),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    readingTime: z.number().default(6),
    draft: z.boolean().default(false),
  }),
});

export const collections = { cases, posts };
