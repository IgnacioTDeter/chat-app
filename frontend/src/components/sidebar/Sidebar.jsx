import SearchInput from '../sidebar/SearchInput'
import Conversations from './Conversations'


const Sidebar = () =>{
    return(
        <article className="w-2/3 items-center py-2">
            <SearchInput/>
            {/*<Conversations/>
            <Logout />*/}
            <Conversations/>
            
        </article>
    )
}

export default Sidebar