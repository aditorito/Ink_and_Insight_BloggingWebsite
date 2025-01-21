export const SkelatonComponents = () => {
    return <div>
        <article className="max-w-4xl mx-auto bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 mb-8">
            <div className="flex flex-col md:flex-row">
                <div className="flex-1 p-6 cursor-pointer">
                    <div className="flex items-center space-x-2 mb-4">
                        <span className="text-gray-700 font-medium">
                            <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>

                        </span>
                    </div>

                    {/* Title and Description */}
                    <h2 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">
                        <div className="h-2 bg-gray-200 rounded-full  max-w-[360px] mb-2.5"></div>

                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-2">

                        <div className="h-2 bg-gray-200 rounded-full  max-w-[330px] mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full  max-w-[300px] mb-2.5"></div>
                    </p>

                    {/* Footer with Meta Information */}
                    <div className="flex items-center text-gray-500 text-sm space-x-4">
                        <span>
                            <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>

                        </span>
                    </div>
                </div>
            </div>
            <div className="bg-slate-200 h-1 w-full" ></div>
        </article>
    </div>
}