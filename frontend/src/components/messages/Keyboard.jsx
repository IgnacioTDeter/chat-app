import { CiImageOn } from "react-icons/ci";
import { MdEmojiEmotions } from "react-icons/md";


const Keyboard = () =>{


    return(
        <article className="flex w-full h-16 bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 rounded-br-md p-2 mt-auto fixed bottom-0">

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
            />

            <button className="bg-amber-500 hover:bg-amber-600 transition-colors ml-2 w-1/5 rounded-md font-bold" alt="Enviar">
                Enviar
            </button>
        </article>
    )
}

export default Keyboard