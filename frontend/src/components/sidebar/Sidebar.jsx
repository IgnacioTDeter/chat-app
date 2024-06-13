import SearchInput from '../sidebar/SearchInput'
import Conversations from './Conversations'


const Sidebar = () =>{
    return(
        <article className="w-1/4 items-center p-4">
            <SearchInput/>
            <div className="divider"></div>
            {/*<Conversations/>
            <Logout />*/}
            <Conversations/>
        </article>
    )
}

export default Sidebar