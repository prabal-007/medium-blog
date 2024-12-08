import { MdOutlineBookmarkAdd } from "react-icons/md";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { IoIosMore } from "react-icons/io";
import { Link } from "react-router-dom";

interface BlogCardtypes {
    author: string,
    date: string,
    title: string,
    content: string,
    read_time: string,
    image: string,
    id: number;
}

const BlogCard = ({author, date, title, content, read_time, image, id}: BlogCardtypes) => {

    return ( <Link to={`/blog/${id}`}>
        <div className="w-[75%] p-4 shadow-sm m-1 flex gap-1">
            <div className="flex flex-col gap-2 justify-center items-start self-center p-4">
                <div className="flex gap-2 text-black text-sm font-semibold ">
                    <img src="/images/profile.png" alt="" className="size-6 rounded-full" />
                    <span className="flex">{author} <p className="text-gray-500 font-normal">| {date}</p></span>
                </div>

                <div className="w-full flex flex-col justify-center">
                    <h1 className="text-black text-xl font-bold flex-wrap">{title}</h1>
                    <p className="text-sm">{content.slice(0, 100) + "..."}</p>
                </div>
                <div className="flex justify-between text-sm p-1 w-full">
                    <div className="flex gap-2">
                        <p className="border bg-gray-200 px-2 rounded-2xl">Side Hustle</p>
                        <p>{read_time}</p>
                    </div>
                    <div className="flex gap-2 w-[10%] justify-around items-center mr-4">
                        <MdOutlineBookmarkAdd />
                        <IoIosRemoveCircleOutline />
                        <IoIosMore />
                    </div>
                </div>
            </div>
            <div className="w-fit">
                <img src={`/images/${image}.png`} alt="" className="size-40" />
            </div>
        </div>
        </Link>)
}

export default BlogCard
