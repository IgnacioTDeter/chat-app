import TopChat from "./TopChat"
import Keyboard from "./Keyboard.jsx"
import Chat from "./Chat.jsx"

const MessageContainer = () =>{
    return(
        <section className="w-full h-full rounded-tr-md rounded-br-md bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 flex-col">
            <TopChat/>
            <Chat/>
            <Keyboard/>
        </section>
    )
}

export default MessageContainer