import { useState } from "react";
import GenderCheckbox from '../singup/GenderCheckbox'

const Signup = () =>{
  
    
	const handleSubmit = async (e) => {
		e.preventDefault();
		await signup(inputs);
	};

    return (


        <section className="w-full md:w-1/4 bg-black p-4 pb-12  bg-white-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 " >

            <div className="text-center text-2xl text-white p-4 ">
                Signup <span className="italic text-orange-600">Chat-App</span>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center" action="">

                <div className="w-2/3">
                    <label className="label text-white" htmlFor="">Nombre y Apellido</label>
                    <input

                        type='text' //Tipo texto
                        placeholder='Ej: Juan Perez'
                        className='w-full input input-bordered h-10'
                        //value={inputs.fullName}
						onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}

                    />
                </div>

                <div className="w-2/3">
                    <label className="label text-white mt-3" htmlFor="">Nombre de Usuario</label>
                    <input
                        type='Ej: juanPerez22'
                        placeholder='Ingrese su contraseña'
                        className='w-full input input-bordered h-10'
                        //value={inputs.username}
						onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
                    />
                </div>

                <div className="w-2/3">
                    <label className="label text-white mt-3" htmlFor="">Contraseña</label>
                    <input
                        type='Ingrese su contraseña'
                        placeholder='Ingrese su contraseña'
                        className='w-full input input-bordered h-10'
                        //value={inputs.password}
						onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                    />
                </div>

                <GenderCheckbox></GenderCheckbox>

                <a to='/login' className='text-sm w-2/3 cursor-pointer float-left hover:underline hover:text-blue-600 mt-3 inline-block text-gray-400'>
						{"Already"} have an account?
				</a>

                <div className="w-2/3 mt-10">
                    <button className="btn btn-warning w-full" >
                        Registrarse
                    </button>
                </div>

            </form>
        </section>
    )
}

export default Signup