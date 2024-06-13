import Conversation from "./Conversation"

const Conversations = () =>{
    return(
        <article className="flex flex-col overflow-auto py-3">
            <Conversation/>
            <div className="divider h-auto my-0"></div>
            <Conversation/>
            <div className="divider h-auto my-0"></div>
            <Conversation/>
            <div className="divider h-auto my-0"></div>
            <Conversation/>
            <div className="divider h-auto my-0"></div>
            <Conversation/>
            <div className="divider h-auto my-0"></div>
        </article>
    )
}

export default Conversations;