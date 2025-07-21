import Link from "next/link";

export default function PostCard({title, date, slug, author, image}) {
    return (
        <div className="flex flex-wrap mt-7">
            <div className="flex gap-3 bg-amber-200 mr-40 ml-64 w-full max-w-none">
                <Link href={slug} className="rounded w-60" >
                    <img src={image} alt="postcard-image" className="rounded w-48" />
                </Link>
                <div>
                    <Link href={slug} className="font-bold">{title}</Link>
                    <p className="text-sm italic">{date}-{author}</p>
                    <div className="mt-4">
                        <p>NextJs adalah sebuah framework open-source berbasis React yang digunakan untuk membangun aplikasi web modern.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}