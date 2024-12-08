import { IoIosMore } from "react-icons/io";
import { CiBellOn } from "react-icons/ci";

export const Appbar = () => {
    return (
        <div className='flex justify-between px-14 py-3 border'>
            <div className='flex gap-3 justify-center items-center'>
                <img src="/images/image.png" className="size-8 rounded-full" alt="" />
                <p className="text-black font-semibold ">Draft in kirags</p>
                <p className="text-gray-500">saved</p>
            </div>
            <div className="flex gap-5 justify-around items-center">
                <button className="bg-green-600 px-2 rounded-xl text-sm text-white">Publish</button>
                <IoIosMore className="size-6"/>
                <CiBellOn className="size-6"/>
                <div className="relative inline-flex items-center justify-center size-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                    <span className="font-medium text-gray-600 dark:text-gray-300">JL</span>
                </div>

            </div>
        </div>
    )
}
