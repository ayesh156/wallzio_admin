import { wall, google, loginCImg } from '../assets';
import '../constants/style.css';
import React from 'react'

function Login() {
    return (
        <div className='grid sm:grid-cols-2 text-white '>
            <div className="relative sm:h-full h-[50vh] flex flex-col">
                <div className="absolute top-[20%] left-[10%] flex flex-col">
                    <h1 className='text-4xl font-bold my-4'>Turn Your Ideas into reality</h1>
                    <p className="text-xl font-normal">Start for free and get attractive offers from the community</p>
                </div>

                <div className='h-[100vh]'>
                    <img src={loginCImg} className='w-full h-full object-cover' />
                </div>
            </div>

            <div className='h-full flex flex-col p-10 sm:p-20 items-center'>

                <div className='w-full max-w-[500px] mx-auto mr-auto'>
                    <div className='w-[8rem]'>
                        <a href="../">
                            <img src={wall} className='h-10' alt="Wallzio" />
                        </a>
                    </div>
                </div>

                <div className="w-full flex flex-col max-w-[500px] mt-10 sm:mt-20 sm:pt-0 pt-5">
                    <div className="w-full flex flex-col mb-2">
                        <h3 className="text-3xl font-semibold mb-2">Login</h3>
                        <p className="text-base mb-2">Welcome Back! Please enter your details.</p>
                    </div>

                    <div className="w-full flex flex-col">
                        <input type="email" placeholder='Email' className="w-full py-2 my-2 bg-transparent placeholder:text-gray-300 border-b  border-white outline-none focus:outline-none" />

                        <input type="password" placeholder='Password' className="w-full py-2 my-2 placeholder:text-gray-300 bg-transparent border-b border-white outline-none focus:outline-none" />
                    </div>

                    <div className="w-full flex items-center justify-between">
                        <div className="w-full flex items-center">
                            <input type="checkbox" className='w-4 h-4 mr-2' />
                            <p className="text-sm">Remember Me</p>
                        </div>

                        <p className="text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2">Forgot Password ?</p>
                    </div>

                    <div className='w-full text-xl  mt-10 font-semibold bg-white text-[#060606] border border-white/40 rounded-md p-4 text-center flex items-center justify-center cursor-pointer'>
                        
                        Sign In
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Login