import matter from "gray-matter"
import { marked } from "marked"
import { readdir, readFile } from "node:fs/promises"


export async function getPost(slug) {
    const markDown = await readFile(`./content/blog/${slug}.md`, 'utf8')
    const { content, data: { url, title, image, date, author } } = matter(markDown)
    const text = marked(content)

    return { url, title, image, date, author, text }
}

export async function getSlugs() {
    const files = await readdir("./content/blog");
    const slugs = files.filter(file => file.endsWith(".md")).map(file => file.slice(0, -".md".length)); 

    return slugs
}

export async function getAllPost() {
const slugs = await getSlugs()
    
    const posts = [];

    for (const slug of slugs) {
        const post = await getPost(slug)
        posts.push({ slug, ...post })
    }
    return posts
};