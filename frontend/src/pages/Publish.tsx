import axios from "axios"
import { Appbar } from "../components/Appbar"
import { BACKEND_URL } from "../../config"
import { ChangeEvent, EventHandler, useState } from "react"
import { useNavigate } from "react-router-dom"

export const Publish = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    return (<>
        <Appbar />
        <div className="w-3/4 flex flex-col items-center p-4">
            <input type="text" onChange={(e) => {setTitle(e.target.value)}} placeholder="Your Title here" className="border w-full rounded-md p-2" />
            <Textarea onChange={(e) => {
                setContent(e.target.value)
            }} />
            <button onClick={ async () => {
                const res = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                    title,
                    content,
                }, {
                    headers: {
                        Authorization: localStorage.getItem("token")
                    }
                });
                navigate(`/blog/${res.data.id}`)
            }} type="submit" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center rounded-md text-white bg-blue-700">
                Publish post
            </button>
        </div>
    </>
    )
}


function Textarea({ onChange }: { onChange : (e: ChangeEvent<HTMLTextAreaElement>) => void}) {
    return (<>
        <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-100 dark:border-gray-100">
            {/* <div className="flex items-center justify-between">

                <div id="tooltip-fullscreen" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-black transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    Show full screen
                    <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
            </div> */}
            <div className="px-1 py-2 bg-white rounded-b-lg">
                <textarea id="editor" rows="8" onChange={onChange} className="block w-full p-2 text-sm text-black bg-white rounded-md border-0 dark:bg-gray-100 focus:ring-0 dark:text-black dark:placeholder-gray-400" placeholder="Write an article..." required ></textarea>
            </div>
        </div>

    </>)
}