import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message";

const Chat = () => {
    const { messages, loading } = useGetMessages();
    console.log("messages:", messages);
    return (
        <article className="px-4 flex-1 h-[405px] overflow-auto">
            {!loading && messages.length > 0 && messages.map(message => (
                <Message key={message._id} message={message} />
            ))}

            {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

            {!loading && messages.length === 0 && (
                <p className="text-center text-white">Envía un mensaje para empezar la conversación</p>
            )}
        </article>
    );
}

export default Chat;
