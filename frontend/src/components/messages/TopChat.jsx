const TopChat = ({userName}) => {
    return (
        <article className="flex w-full h-20 bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 rounded-tr-md p-2">

            <div className="flex items-center gap-4">
                <div className="avatar online flex items-center">
                    <div className="ml-4 max-w-14 min-w-14 rounded-full">
                        <img src="/chicken.png" alt="user avatar" />
                    </div>
                </div>
                <div className="flex flex-col justify-between">
                    <div className="font-bold text-white">
                        <p>{userName}</p>
                    </div>
                    <div className="text-gray-500 text-xs  ">
                    Having coffee and procrastinating a bit
                    </div>
                </div>
            </div>


        </article >
    )
}

export default TopChat