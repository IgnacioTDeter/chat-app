import TopChat from "./TopChat"
import Keyboard from "./Keyboard.jsx"

const MessageContainer = () =>{
    return(
        <section className="w-full rounded-tr-md rounded-br-md bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 ">
            <TopChat/>
            <Keyboard/>
        </section>
    )
}

export default MessageContainer