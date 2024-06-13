import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer'

const Home = () =>{
    return(
        <section className="flex sm:h-[450px] md:h-[550px] w-3/4 h-full bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100 border-r gap-4 ">
            <article className='w-1/5 h-full flex bg-cyan-900 rounded-tl-md rounded-bl-md '>

            </article>
            <Sidebar />
			<MessageContainer />
        </section>
    )
}

export default Home;