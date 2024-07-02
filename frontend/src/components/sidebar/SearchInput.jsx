import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations"
import toast from "react-hot-toast";

const SearchInput = () => {

    const [search, setSearch] = useState("")

    const { setSelectedConversation } = useConversation();
    const {conversations} = useGetConversations()

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(!search)return
        
        const conversation = conversations.find(
            (c) => c.fullName.toLowerCase().includes(search.toLowerCase())
        )

        if(conversation){
            setSelectedConversation(conversation);
            setSearch('');
        } else {
            toast.error("No se encontro ningun usuario")
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex items-center justify-center gap-2 w-full mt-2 mb-7 px-4" action="">
            <input type="" className="input w-full h-10 items-center " placeholder="Buscar..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />

            <button className="bg-amber-500 hover:bg-amber-600 transition-colors p-2 w-24 h-10 rounded-md flex justify-center items-center">
            <IoSearch className="" />
            </button>
        </form>
    )
}

export default SearchInput;