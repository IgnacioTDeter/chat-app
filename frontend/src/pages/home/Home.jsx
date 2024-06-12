import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer'

const Home = () =>{
    return(
        <section className="flex sm:h-[450px] md:h-[550px] w-3/4 h-full bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100 border-r p-4 flex-col ">
            <Sidebar />
			<MessageContainer />
        </section>
    )
}

export default Home;