
import Conversation from "./Conversation"
import useGetConversations from "../../hooks/useGetConversations";

const Conversations = () => {
    const { loading, conversations } = useGetConversations();
    console.log("Conversations:", conversations);
    return (
        <article className="flex flex-col overflow-auto py-3">
            {conversations.map((conversation) => (
                <div className="">
                    <div className="divider h-auto my-0"></div>
                    <Conversation
                        key={conversation._id}
                        conversation={conversation}
                       />
                </div>

            ))}

            {loading ? <span className="loading loading-spinner mx-auto"></span> : null}
        </article>
    );
};

export default Conversations;
