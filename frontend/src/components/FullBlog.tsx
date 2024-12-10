import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";
import { BlogsSkeleton } from "./BlogsSkeleton";
export const FullBlog = () => {
    const { id } = useParams();
    const { loading, blog } = useBlog({
        id: id || ""
    });

    if (loading) {
        return <div>
            <BlogsSkeleton />
            <BlogsSkeleton />
            <BlogsSkeleton />
        </div>;
    }

    return (
        <div className="flex w-11/12 justify-center p-5">
            <div className="flex flex-col w-3/4 p-4 gap-4">
                <h1 className="text-black font-extrabold text-4xl text-wrap">{blog?.title}</h1>
                <p className="text-gray-500">Posted on August 24, 2024</p>
                <p className="text-black">{blog?.content}</p>
            </div>
            <div className="w-1/4 p-4">
                <h4 className="text-black font-semibold">Author</h4>
                <div className="flex gap-4 p-1 items-center">
                    <div className="relative inline-flex items-center justify-center size-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                        <span className="font-medium text-gray-600 dark:text-gray-300">JL</span>
                    </div>
                    <div>
                        <h2 className="text-black text-2xl font-bold">{blog?.author.name}</h2>
                        <p className="text-gray-500">Master of martin, xyz of ase the funiest person on earth.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
