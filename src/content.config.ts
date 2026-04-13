import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
    loader: glob({ base: './src/content/posts', pattern: '**/*.{md,mdx}' }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.date(),
        updatedDate: z.date().optional(),
        heroImage: z.string().optional(),
        tags: z.array(z.string()),
        accentColor: z.string().default('mint'),
        addIcon: z.string().optional(),
    }),
});

export const collections = { posts };