import {useAuthContext} from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";

const Message = ({message}) => {

    const {authUser} = useAuthContext();
    const {selectedConversation} = useConversation();
    const fromMe = message.senderId === authUser._id;
    const chatClassName = fromMe ? 'chat-end' : 'chat-start';
    //const profilePic  = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
    const bubbleBgColor = fromMe ? 'bg-amber-600' : '';

    // Formatear la fecha para mostrar solo la hora y los minutos
    const formattedTime = new Date(message.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    return (
        <div className={`chat ${chatClassName}`}>
            <div className={`chat-bubble text-white ${bubbleBgColor}`}>
                {message.message}
            </div>
            <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
                {formattedTime}
            </div>
        </div>
    );
}

export default Message;
