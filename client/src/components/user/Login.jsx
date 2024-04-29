import React from 'react';
import { NavLink } from 'react-router-dom';

function Login(props) {
    return (
        <div className='container-fluid h-screen flex justify-center items-center'>
            <div className='container mx-auto'>
                <div className='grid lg:grid-cols-2 items-center gap-16'>
                    <form className='mb-10'>
                        <h1 className='text-4xl font-bold my-4'>Login</h1>

                        <div className='mb-2'>
                            <div>
                                <label className='block text-slate-600 mb-1'>E-mail Address</label>
                                <input className='w-full border-2 border-slate-300 h-11 px-2 rounded-md' placeholder='enter your e-mail' type='email'/>
                            </div>
                        </div>
                    
                        <div className='mb-2'>
                            <div>
                                <label className='block text-slate-600 mb-1'>Password</label>
                                <input className='w-full border-2 border-slate-300 h-11 px-2 rounded-md' placeholder='Password' type='password'/>
                            </div>
                        </div>
                        <div className='mb-2'>
                            <p>If you aren’t registered. Please <NavLink className="font-bold italic hover:underline" to={'/registration'}>Sign-in</NavLink> </p>
                        </div>
                        <button className='btn bg-purple-600 text-white w-full text-lg hover:bg-purple-700'>Sign in</button>
                    </form>
                    <div className='w-full flex justify-center'>
                        <img src='userimg/registration.png' alt='registerimg' />
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;