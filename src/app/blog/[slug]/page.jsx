import { getPost, getSlugs } from "@/lib/post"

export async function generateStaticParams() {
  const slugs = await getSlugs()
  return slugs.map((slug) => ({
      slug
  }))
}

export async function generateMetadata({ params: {slug} }) {
  const post = await getPost(slug)
  return {
    title: post.title,
  }
}

export default async function BlogBelajar({params}) {
    const param = await params
    const post = await getPost(param.slug)
    return (
        <div className="bg-amber-200">
            <h1 className="font-bold text-4xl text-center">
                {post.title}
            </h1>
            <p className="text-center">{post.date}-{post.author}</p>
            <img src={post.image} className="block mx-auto w-2xl" />

            <article dangerouslySetInnerHTML={{ __html: post.text }} className="max-w-none prose" />
        </div>
    ) 
}