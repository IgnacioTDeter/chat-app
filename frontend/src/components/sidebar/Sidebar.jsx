import SearchInput from '../sidebar/SearchInput'

const Sidebar = () =>{
    return(
        <article className="w-1/4 items-center p-4">
            <SearchInput/>
            <div className="divider"></div>
            {/*<Conversations/>
            <Logout />*/}
        </article>
    )
}

export default Sidebar