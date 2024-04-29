import React from 'react';
import { NavLink } from 'react-router-dom';

function Registration(props) {
    return (
        <div className='container-fluid h-screen flex justify-center items-center'>
            <div className='container mx-auto'>
                <div className='grid lg:grid-cols-2 items-center gap-16'>
                    <form className='mb-10'>
                        <h1 className='text-4xl font-bold my-4'>Create Account</h1>

                        <div className='mb-2'>
                            <div className='grid lg:grid-cols-2 lg:gap-3'>
                                <div>
                                    <label className='block text-slate-600 mb-1'>First Name</label>
                                    <input className='w-full border-2 border-slate-300 h-11 px-2 rounded-md' placeholder='First Name' type='text'/>
                                </div>
                                <div>
                                    <label className='block text-slate-600 mb-1'>Last Name</label>
                                    <input className='w-full border-2 border-slate-300 h-11 px-2 rounded-md' placeholder='Last Name' type='text'/>
                                </div>
                            </div>
                        </div>
                        <div className='mb-2'>
                            <div>
                                <label className='block text-slate-600 mb-1'>E-mail Address</label>
                                <input className='w-full border-2 border-slate-300 h-11 px-2 rounded-md' placeholder='enter your e-mail' type='email'/>
                            </div>
                        </div>
                        <div className='mb-2'>
                            <div className='grid lg:grid-cols-4 lg:gap-3'>
                                <div>
                                    <label className='block text-slate-600 mb-1'>Age</label>
                                    <input className='w-full border-2 border-slate-300 h-11 px-2 rounded-md' placeholder='age' type='text'/>
                                </div>
                                <div className='col-span-3'>
                                    <label className='block text-slate-600 mb-1'>Mobile <span className='text-indigo-800 text-sm'>(use bdt mobile number)</span></label>
                                    <input className='w-full border-2 border-slate-300 h-11 px-2 rounded-md' placeholder='mobile' type='text'/>
                                </div>
                            </div>
                        </div>
                        <div className='mb-2'>
                            <div>
                                <label className='block text-slate-600 mb-1'> Address</label>
                                <input className='w-full border-2 border-slate-300 h-11 px-2 rounded-md' placeholder='State, City, Area' type='text'/>
                            </div>
                        </div>
                        <div className='mb-2'>
                            <div className='grid lg:grid-cols-2 lg:gap-3'>
                                <div>
                                    <label className='block text-slate-600 mb-1'>Password</label>
                                    <input className='w-full border-2 border-slate-300 h-11 px-2 rounded-md' placeholder='Password' type='password'/>
                                </div>
                                <div>
                                    <label className='block text-slate-600 mb-1'>Confirm Password</label>
                                    <input className='w-full border-2 border-slate-300 h-11 px-2 rounded-md' placeholder='Confirm Password' type='password'/>
                                </div>
                               
                            </div>
                        </div>
                        <div className='mb-2'>
                            <p>If you have already an Account? Please <NavLink className="font-bold italic hover:underline" to={'/login'}>Log-in</NavLink> </p>
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

export default Registration;