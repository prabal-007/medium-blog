import { Appbar } from "../components/Appbar";
import { FullBlog } from "../components/FullBlog";

const Blog = () => {
  return <>
    <Appbar />
    <div className="flex justify-center w-11/12">
      <FullBlog />
    </div>
  </>
}

export default Blog
