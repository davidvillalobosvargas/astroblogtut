import rss from '@astrojs/rss';
import { formatBlogPosts } from "../js/utils"
import { getCollection } from 'astro:content';

const postImportResult = await getCollection("blog")
const posts = formatBlogPosts(postImportResult);

export async function GET(context) {
  return rss({
    stylesheet: '/rss/styles.xsl',
    title: 'My astro blog',
    description: 'A humble Astronaut’s guide to the stars',
    site: context.site,
    items: posts.map((post) => ({
      link: `/blog/${post.slug}`,
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      customData: `
        <author>${post.data.author}</author>
      `
    }))
  });
}