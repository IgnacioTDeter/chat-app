
const Conversation = ({ conversation }) => {
    return (
        <article className="flex p-2 gap-3  bg-transparent hover:bg-white hover:bg-opacity-20  items-center justify-center cursor-pointer ">
            <div className="avatar online">
                <div className="w-12 rounded-full">
                    <img src={conversation.profilePic} alt="user avatar" />
                </div>
            </div>
            <div className="flex flex-col flex-1">
                <div className="flex gap-3 justify-between">
                    <p className="font-bold text-gray-200"> {conversation.fullName} </p>
                </div>
            </div>

        </article>
    );
};

export default Conversation;
