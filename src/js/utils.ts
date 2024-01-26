export function slugify(text) {
    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '')
      .replace(/--+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  }
  
  export function formatDate(date) {
    return new Date(date).toLocaleDateString('en-US', {
      timeZone: "UTC",
    })
  }

  import type { CollectionEntry } from "astro:content";
  export function formatBlogPosts(posts:CollectionEntry<"blog">[],{
    filterOutDraft=true,
    filterOutFuturePosts=true,
    sortByDate=true,
    limit=undefined
  }={}){
    const filteredPosts=posts.reduce((acc,post)=>{
      const {date, draft} = post.data
      if (filterOutDraft && draft){return acc}
      if (filterOutFuturePosts && new Date(date) > new Date){return acc}
      acc.push(post)
      return acc
    },[])as CollectionEntry<"blog">[]

    if (sortByDate) {
      filteredPosts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
    } else {
      filteredPosts.sort(() => Math.random() - 0.5)
    }
    
    if (typeof limit === "number") {
      return  filteredPosts.slice(0, limit);
    }
    
    return filteredPosts
  }