import React from 'react';
import { BsFillSignpostFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";
import { MdProductionQuantityLimits } from "react-icons/md";
import { RiAccountCircleFill } from "react-icons/ri";
import { Link, NavLink } from 'react-router-dom';
import Copyright from './Copyright';

function MasterLayout(props) {
    return (
        <>

        <div className='header bg-pink-600 text-white'>
            <div className='container mx-auto lg:flex'>
                    <div className='flex items-center gap-1 lg:mr-5 '>
                        <HiMail/><p>mobinulislaminfo@gmail.com</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <FaLocationDot /><p>No: 58 A, East Madison Street, Baltimore, MD, USA 4508</p>
                    </div>
            </div>
        </div>

        <div className='header-sec my-4'>
            <div className='container mx-auto'>
                <div className='grid lg:grid-cols-2 lg:py-2'>
                    <div >
                        <NavLink to='/'><img src='home/logo1.png' className='sm:w-20 justify-start cursor-default' alt='mainLogo'/></NavLink>
                    </div>
                    <div className='flex items-center justify-end gap-3'>
                        <NavLink to={'/all-ads'} className='btn text-lg bg-amber-500 px-4 py-0 rounded-2xl hover:bg-pink-600 hover:text-white transition-all border-0'><MdProductionQuantityLimits />All Ads</NavLink>
                        <NavLink to='/post-ads' className='btn text-lg bg-amber-500 px-4 py-0 rounded-2xl hover:bg-pink-600 hover:text-white transition-all border-0'><BsFillSignpostFill />Post your Ad</NavLink>
                        <NavLink to='/registration' className='btn text-lg bg-amber-500 px-4 py-0 rounded-2xl hover:bg-pink-600 hover:text-white transition-all border-0'><RiAccountCircleFill  />My Account</NavLink>
                    </div>
                </div>
            </div>
        </div>

            {props.children}

        <div className='bg-purple-700 py-8'>
            <div className='container mx-auto'>
                <div className='grid lg:grid-cols-3 gap-14 text-white'>
                    <div>
                        <img src='home/logo2.png' alt='logo2' />
                        <p className='mt-2'>This website Build ReactJs, ExpressJS, NodeJS, MongoDB & Tailwind CSS. If you have any question you can visit https://mobinulislam.epizy.com or email: mobinulislammahi@gmail.com</p>
                    </div>
                    <div>
                        <h1 className='font-bold text-2xl'>Important Link</h1>
                        <NavLink className="block py-1 hover:underline">Home</NavLink>
                        <NavLink className="block py-1 hover:underline">All Ads</NavLink>
                        <NavLink className="block py-1 hover:underline">Post your Ads</NavLink>
                        <NavLink className="block py-1 hover:underline">My Account</NavLink>
                    </div> 
                    <div>
                        <h1 className='font-bold text-2xl'>Newsletter</h1>
                        <p>Sign up and receive the latest tips via email.</p>
                        <p>Email</p>
                        <input type='email' className='rounded-md border-0 w-full h-11 px-3 text-purple-600 font-semibold text-lg' />
                        <NavLink className='btn px-5 py-0 rounded-lg bg-pink-600 hover:bg-amber-500 text-white transition-all border-0 mt-4'>Subscribe</NavLink>
 

                    </div>
                </div>
            </div>
        </div>
        <Copyright/>
            
        </>
    );
}

export default MasterLayout;