import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";


const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {loading, login} = useLogin();
    
	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(username, password);
	};

    return (


        <section className="w-full md:w-1/4 bg-black p-4 pb-12  bg-white-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 " >

            <div className="text-center text-2xl text-white p-4 ">
                Login <span className="italic text-orange-600">Chat-App</span>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center" action="">
                <div className="w-2/3">
                    <label className="label text-white" htmlFor="">Nombre de Usuario</label>
                    <input

                        type='text' //Tipo texto
                        placeholder='Ej: juanPerez22'
                        className='w-full input input-bordered h-10'
                        //value={username} //Valor de entrada
                        onChange={(e) => setUsername(e.target.value)}

                    />
                </div>

                <div className="w-2/3">
                    <label className="label text-white mt-3" htmlFor="">Contraseña</label>
                    <input
                        type='password'
                        placeholder='Ingrese su contraseña'
                        className='w-full input input-bordered h-10'
                        //value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <Link to={'/signup'} className='text-sm w-2/3 cursor-pointer float-left hover:underline hover:text-blue-600 mt-3 inline-block text-white'>
						{"Don't"} have an account?
				</Link>

                <div className="w-2/3 mt-10">
                    <button className="btn btn-warning w-full" disabled={loading} >
                    {loading ? <span className='loading loading-spinner '></span> : "Iniciar sesion"}
                    </button>
                </div>

            </form>
        </section>
    )
}

export default Login;