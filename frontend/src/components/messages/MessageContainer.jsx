import TopChat from "./TopChat"
import Keyboard from "./Keyboard.jsx"
import Chat from "./Chat.jsx"

const MessageContainer = () =>{
    const noChat = false;

    return(
        <section className="w-full  rounded-tr-md rounded-br-md bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 flex-col ">
            {noChat ? <NoChatSelected/> : 
            <>
            <TopChat/>
            <Chat/>
            <Keyboard/>
            </>
            }
            
        </section>
    )
}

const NoChatSelected = () =>{
    return(
        <div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
				<p>Bienvenido!</p>
				<p>Selecciona una chat para mandar mensajes</p>
			</div>
		</div>
    )
}

export default MessageContainer