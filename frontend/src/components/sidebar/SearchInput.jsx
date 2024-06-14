import { IoSearch } from "react-icons/io5";

const SearchInput = () => {
    return (
        <form className="flex items-center justify-center gap-2 w-full mt-2 mb-7 px-4" action="">
            <input type="" className="input w-full h-10 items-center " placeholder="Buscar..." />

            <button className="bg-amber-500 hover:bg-amber-600 transition-colors p-2 w-24 h-10 rounded-md flex justify-center items-center">
            <IoSearch className="" />
            </button>
        </form>
    )
}

export default SearchInput;