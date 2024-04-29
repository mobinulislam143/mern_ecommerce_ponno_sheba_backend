import React from 'react';
import { NavLink } from 'react-router-dom';

export function Home(props) {
    return (
        <>
            <div className='hero-sec bg-cover bg-center'>
                <div className='container mx-auto py-10'>
                    <div className='grid lg:grid-cols-4 sm:grid-cols-1 gap-10 items-center'>
                        <div className='col-span-2'>
                            <h1 className='text-5xl font-bold pb-4'>BUY OR SELL @ YOUR <br /> CONVENIENCE</h1>
                            <p>We give life to you home & property dreams at your budget</p>

                            <div className='grid lg:grid-cols-4 sm:grid-cols-1 gap-7 pt-5 items-center'>
                                <div>
                                    <p className='text-slate-600'>Select Division</p>
                                    <input type='text' className='rounded-md border-0 w-full h-9 px-2' />
                                </div>
                                <div>
                                    <p className='text-slate-600'>Select District</p>
                                    <input type='text' className='rounded-md border-0 w-full h-9 px-2' />
                                </div>
                                <div>
                                    <p className='text-slate-600'>Select Category</p>
                                    <input type='text' className='rounded-md border-0 w-full h-9 px-2' />
                                </div>
                                <div className='pt-5'>
                                    <NavLink className='btn bg-pink-700  py-2 rounded-2xl border-0 text-white hover:bg-amber-600'>Search by tag</NavLink>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-2 flex justify-end'>
                            <img src='home/heroSec.png' alt='imgs' />
                        </div>
                    </div>




                </div>
            </div>

            <div className='container mx-auto my-6'>
                <h2 className='text-2xl font-bold'>Browse items by category</h2>
                <div className='grid grid-cols-4 items-center gap-10'>
                    <div>

                    </div>
                    <div>
                        <div>
                            <h1>GET ACCESS OVER</h1>
                            <h2><span>Elite</span>PROPERTY</h2>
                            <p>GET a Features Rich Home</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
