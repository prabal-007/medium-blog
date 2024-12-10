
export const BlogSkeleton = () => {
    return (
        <div className="flex flex-col gap-4 justify-center w-full items-center">
            <div role="status" className="w-1/2 animate-pulse">
                <div className="flex flex-col w-3/4 p-4 gap-4 ">
                    <h1 className="text-black font-extrabold  text-wrap bg-gray-200 text-4xl rounded-full w-48 mb-4"></h1>
                    <p className="bg-gray-200 text-4xl rounded-full w-48 mb-4"></p>
                    <p className="bg-gray-200 text-4xl rounded-full w-48 mb-4"></p>
                </div>
                {/* <div className="h-9 bg-gray-200 text-4xl rounded-full w-48 mb-4"></div>
                <div className="h-2 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full max-w-[330px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full max-w-[300px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full max-w-[360px]"></div>
                <span className="sr-only">Loading...</span> */}
            </div>
        </div>
    )
}
