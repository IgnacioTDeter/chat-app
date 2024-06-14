const Conversation = () =>{
    return(
        <article className="flex p-2 gap-3  bg-transparent hover:bg-white hover:bg-opacity-20  items-center justify-center cursor-pointer ">
            <div className="avatar online">
                <div className="w-12 rounded-full">
                    <img src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png" alt="user avatar" />
                </div>
            </div>
            <div className="flex flex-col flex-1">
                <div className="flex gap-3 justify-between">
                     <p className="font-bold text-gray-200"> Jhon Doe </p>
                </div>
            </div>

        </article>
    )
}

export default Conversation;