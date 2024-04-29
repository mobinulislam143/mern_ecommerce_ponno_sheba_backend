import React from 'react';
import { NavLink } from 'react-router-dom';

function VerifyOtp(props) {
    return (
        <div className='container-fluid h-screen flex justify-center items-center'>
            <div className='container mx-auto'>
                <div className='grid lg:grid-cols-2 items-center gap-16'>
                    <div className='w-full flex justify-center'>
                        <img src='userimg/registration.png' alt='registerimg' /> 
                    </div>
                    <form className='mb-10'>
                        <h1 className='text-4xl font-bold my-4 text-center'>Verify Otp</h1>
                        <div className='mb-2 text-center'>
                            <p>If you have already an Account? Please </p>
                        </div>
                      
                        <div className='mb-2'>
                            <div>
                                <label className='block text-slate-600 mb-1'>OTP</label>
                                <input className='w-full border-2 border-slate-300 h-11 px-2 rounded-md' placeholder='enter your valid Otp' type='number'/>
                            </div>
                        </div>
                    
                        <button className='btn bg-purple-600 text-white w-full text-lg hover:bg-purple-700 border-0 mt-2'>Verify</button>
                    </form>
                    
                </div>
            </div>
        </div>
    );
}

export default VerifyOtp;