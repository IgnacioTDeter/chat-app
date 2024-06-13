import Conversation from "./Conversation"

const Conversations = () =>{
    return(
        <article className="flex flex-col overflow-auto py-3">
            <Conversation/>
            <Conversation/>
            <Conversation/>
            <Conversation/>
            <Conversation/>
        </article>
    )
}

export default Conversations;