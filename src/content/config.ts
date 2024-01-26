import {z,defineCollection} from "astro:content"
const blogCollection= defineCollection({
    type:"content",
    schema:z.object({
        // layout: ../../layouts/BlogPostLayout.astro
        title: z.string().max(60),
        date: z.date(),
        author: z.enum([
            "Victoria Greenfelder",
            "Darnell McClure",
            "Anna Dixon",
        ]),
        image: z.object({
        src: z.string(),/* "/images/post-2.jpg" */
        alt: z.string(),
        }),
        description: z.string(),
        draft: z.boolean(),
        category: z.enum([
            "General",
            "Reference Docs",
            "CSS",
            "Astro",
        ])
    })
})

export const collections = {
    'blog': blogCollection,
  };