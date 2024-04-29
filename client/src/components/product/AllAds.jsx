import React from 'react';
import {Link, NavLink} from 'react-router-dom'
import { TbCategoryPlus } from "react-icons/tb";
import { MdMyLocation } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import ProductSlider from './ProductSlider';
import './AllAds.css'


function AllAds(props) {
    return (
        <div className="container mx-auto">
            <div className='bg-white p-6 rounded-lg'>
                <div className='bg-purple-700  lg:flex justify-between items-center p-5 rounded-lg'>
                    <p className='px-2 rounded-2xl bg-amber-500'>Get Safe Browser in your Location!</p>
                    <div>
                        <span className='text-white'><NavLink to='/'>Home </NavLink>/<NavLink to='/all-ads'> All Ads </NavLink>/<NavLink to='/all-ads'> Current Ads</NavLink></span>
                    </div>
                </div>

                <div className='pt-5 lg:flex justify-between mb-2'>
                    <h1 className='text-lg flex items-center gap-2'><TbCategoryPlus  />Category: Electronics</h1>
                    <h1 className='text-lg flex items-center gap-2'><MdMyLocation />Location: Cumilla</h1>
                    
                    <label className="input input-bordered flex items-center gap-2">
                        <input type="text" className="grow lg:w-72" placeholder="Search" />
                        <NavLink className='bg-amber-500 p-3 rounded-lg'><FaSearch /></NavLink>
                    </label>
                </div>
                <hr/>


                <div  className='grid lg:grid-cols-4 sm:grid-cols-1 mt-4 gap-4 '>
                    <div className='border-r-2 px-2'>
                        <p className="text-sm text-slate-600">Sort result by...</p>

                        <div tabIndex={0} className="collapse collapse-arrow hover:bg-slate-100 transition-all my-4">
                            <input type='checkbox' />
                            <div className="collapse-title text-slate-600">
                                Category
                            </div>
                            <div className="collapse-content "> 
                                <ul className="lg:ml-3">
                                    <Link><li  tabIndex={1} className='collapse focus:text-purple-600 hover:text-purple-600'>Home
                                        <ul tabIndex={1} className='collapse-content'>
                                            <li className='hover:text-pink-600'><Link>About</Link></li>
                                            <li className='hover:text-pink-600'><Link>Contact</Link></li>
                                        </ul>
                                    </li>
                                    </Link>

                                
                                </ul>
                            </div>
                        </div>
                       <div>
                            <h1 className='text-slate-600 text-lg font-semibold'>Price Range</h1>
                            <label className='text-slate-600'>Minimum Price 500</label>
                            <input min={0} max={500000} step={500}  className="range range-info"  type='range' />
                            <label className='text-slate-600'>Maximum Price 500</label>
                            <input min={0} max={500000} step={500}  className="range range-info"  type='range' />
                       </div>


                        <hr/>
                        <div tabIndex={0} className="collapse collapse-arrow hover:bg-slate-100 transition-all my-4">
                            <input type='checkbox' />
                            <div className="collapse-title text-slate-600">
                                Brand
                            </div>
                            <div className="collapse-content "> 
                                <ul className="lg:ml-3">
                                    <li className='hover:text-pink-600'><Link>Mymensingh</Link></li>
                                    <li className='hover:text-pink-600'><Link>Gazipur</Link></li>
                                    <li className='hover:text-pink-600'><Link>Narsingdi</Link></li>
                                    <li className='hover:text-pink-600'><Link>Manikganj</Link></li>
                                </ul>
                            </div>
                        </div><hr/>
                        <div tabIndex={0} className="collapse collapse-arrow hover:bg-slate-100 transition-all my-4">
                            <input type='checkbox' />
                            <div className="collapse-title text-slate-600">
                                Location
                            </div>
                            <div className="collapse-content "> 
                                <ul className="lg:ml-3">
                                    <Link><li  tabIndex={1} className='collapse focus:text-purple-600 hover:text-purple-600'>Dhaka
                                        <ul tabIndex={1} className='collapse-content'>
                                            <li className='hover:text-pink-600'><Link>Mymensingh</Link></li>
                                            <li className='hover:text-pink-600'><Link>Gazipur</Link></li>
                                            <li className='hover:text-pink-600'><Link>Narsingdi</Link></li>
                                            <li className='hover:text-pink-600'><Link>Manikganj</Link></li>
                                        </ul>
                                    </li>
                                    </Link>

                                
                                </ul>
                            </div>
                        </div><hr/>

                    </div>
                    <div className='lg:ml-4 lg:mt-4 col-span-2'>
                        <span className='text-slate-500 font-semibold'><NavLink to={'/'}>Home</NavLink> &gt; <NavLink to={'/all-ads'}>All Ads</NavLink> &gt; <NavLink>Mobiles</NavLink></span>
                        <h1 className='font-bold'>Mobiles and Accessories for Sale in Bangladesh</h1>
                        <p className='text-slate-600 text-sm'>Showing 1-25 of 54,871 ads</p>

                        <ProductSlider/>

                        <div className='mt-9 w-full p-2 rounded-md border-2 hover:shadow-lg shadow-custom-pink border-pink-600 cursor-pointer'>
                            <div className='flex gap-3'>
                                <img src='product1.jpg' className='w-24' alt='img' />
                                <div >
                                    <h1 className='text-lg font-bold'>Gigabyte 5g 4th generation gaming pc 8gb ram, Ryzon Processor</h1>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
}

export default AllAds;