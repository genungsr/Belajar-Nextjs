import PostCard from "@/components/postCard";
import { getAllPost } from "@/lib/post";

export const metadata = {
    title: 'Blog',
};



export default async function BlogPage() {
    const post = await getAllPost();
    console.log(post)
    return (
        <div>
            <h1 className="font-bold text-3xl text-center font-[geist-sans]">
                Halaman Blog
            </h1>
            {post.map(post => {
                return (
                    <PostCard
                        slug={`/blog/${post.slug}`}
                        title={post.title}
                        image={post.image}
                        date={post.date}
                        author={post.author} />
                )
            })}
        </div>
    )
}