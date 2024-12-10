import { Appbar } from "../components/Appbar"
import BlogCard from "../components/BlogCard"
import { BlogsSkeleton } from "../components/BlogsSkeleton"
import { useBlogs } from "../hooks"

export const Blogs = () => {
    const {loading, blogs} = useBlogs()

    if (loading) {
        return <div>
            <BlogsSkeleton />
            <BlogsSkeleton />
            <BlogsSkeleton />
            <BlogsSkeleton />
            <BlogsSkeleton />
            <BlogsSkeleton />
        </div>
    }
  return (<>
  <Appbar />
    <div className="flex flex-col justify-center items-center">
        {blogs.map(blog => <BlogCard author={blog.author.name} date="Dec 8, 2024" title={blog.title} content={blog.content} read_time="3 min read" image="blog1" id={blog.id}/>)}


        <BlogCard author="Stark T." date="Dec 8, 2024" title="How an Ugly Single-Page website make $5,000 a Month with Affilate marketing." content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptatibus delectus est accusamus eum voluptatum veritatis et obcaecati, ratione laboriosam, soluta dolori. . ." read_time="3 min read" image="blog1"/>
    </div>
  </>
  )
}
