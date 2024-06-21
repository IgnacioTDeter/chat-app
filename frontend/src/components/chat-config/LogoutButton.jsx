import { BiLogOut } from "react-icons/bi"
import useLogout from '../../hooks/useLogout'

const LogoutButton = () =>{

    const {loading, logout} = useLogout()

    return (
        <div className="mt-auto flex justify-center items-center w-full h-1/3">
            {!loading ? (
                <BiLogOut className='w-6 text-white cursor-pointer h-[50px]'
                onClick={logout}/>
             ) : (
                <span className="loading loading-spinner"></span>
             )}
        </div>
    )
}

export default LogoutButton