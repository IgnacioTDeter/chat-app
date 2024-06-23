import { CiImageOn } from "react-icons/ci";
import { MdEmojiEmotions } from "react-icons/md";
import useSendMessage from "../../hooks/useSendMessage";
import { useState } from "react";

const Keyboard = () =>{

    const [message, setMessage] = useState("")
    const {loading, sendMessage} =useSendMessage()

    const handleSubmit = async (e) =>{
        e.preventDefault()
        if(!message) return;
        await sendMessage(message);
        setMessage("");
    }

    return(
        <form className="flex w-full h-16 bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 rounded-br-md p-2 mt-auto fixed bottom-0" onSubmit={handleSubmit}>

            <div className="text-white p-1 mr-1 cursor-pointer">
                <CiImageOn size={40}/>
            </div>
            <div className="text-white p-1 mr-2 cursor-pointer">
                <MdEmojiEmotions size={40}/>
            </div>
            <input 
                className="w-2/3 text-gray-200 focus:outline-none bg-slate-600 rounded-md flex p-3"
                type="text"
                placeholder="Type a message"
                value={message}
                onChange={(e) =>{ setMessage(e.target.value)}}
            />

            <button type="submit" className="bg-amber-500 hover:bg-amber-600 transition-colors ml-2 w-1/5 rounded-md font-bold" alt="Enviar">
                Enviar
            </button>
        </form>
    )
}

export default Keyboard