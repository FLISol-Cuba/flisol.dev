import { z, defineCollection } from "astro:content";
const blogSchema = z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    heroImage: z.string().optional(),
    categories: z.array(z.string()).refine(items => new Set(items).size === items.length, {
        message: 'Category must be unique.',
    }).optional(),
});

export type BlogSchema = z.infer<typeof blogSchema>;

const blogCollection = defineCollection({ schema: blogSchema });

export const collections = {
    'blog': blogCollection
}