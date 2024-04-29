import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { TbCategoryPlus } from "react-icons/tb";
import { MdMyLocation } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { MdUpdateDisabled } from "react-icons/md";
import { GiCrossMark } from "react-icons/gi";
import ProductImage from './ProductImage';
import { BsTelephonePlusFill } from "react-icons/bs";
import Comments from './Comments';

function AdsDetails(props) {

    function revealPhoneNumber() {
        var phoneNum = document.getElementById('phoneNum');
        var phoneNumberContainer = document.getElementById('phoneNumberContainer');
        
        phoneNum.classList.remove('hidden');
        phoneNumberContainer.classList.add('hidden');
    }
    return (
        <div className='container mx-auto'>
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

                <div className='grid lg:grid-cols-5 sm:grid-cols-1 mt-4 gap-4'>
                    <div className='sm:hidden lg:block md:hidden'>
                        <h2 className='font-semibold'>Devloper Details</h2>
                        <div className='card p-4 shadow-md'>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv1aAxmwETVWQptk4y4e8Wbv_E8FnTUEXyWr0qPKgeXA&s" className='w-20 rounded-lg my-4' alt='img' />
                            <h1 className='font-semibold text-lg'>Name: Mahi</h1>
                            <p className='text-slate-600'>This is Mobinul Islam Mahi. Mern Devloper</p>
                        </div>
                    </div>
                    <div className='lg:col-span-3 border-r-2 border-slate-2200 pr-3 sm:col-span-1'>
                        <h1 className='font-semibold text-lg'>Single result by Search: GigaTech Core i5 4th Gen.</h1>
                        <p className='text-sm text-slate-600'>Posted on 17 Apr 3:09 pm, Pabna, Rajshahi Division</p>
                        <div className='my-3'>
                            <ProductImage/>
                        </div>
                        <h1 className='font-semibold text-purple-600  text-2xl mb-2'>Price: 5599</h1>


                        <span className='text-slate-600'>Product Name: <span className='text-slate-900 font-semibold'>Cpu</span></span>

                        <div class='grid lg:grid-cols-2 sm:grid-cols-1 justify-center gap-y-2 lg:mx-11 pt-2'>
                            <div>
                                <span class='text-slate-600'>Brand: <span class='text-slate-900 font-semibold'>Asus</span></span>
                            </div>
                            <div>
                                <span class='text-slate-600'>Remark: <span class='text-slate-900 font-semibold'>New</span></span>
                            </div>
                            <div>
                                <span class='text-slate-600'>Model: <span class='text-slate-900 font-semibold'>Other Model</span></span>
                            </div>
                            <div>
                                <span class='text-slate-600'>Color: <span class='text-slate-900 font-semibold'>Red</span></span>
                            </div>
                            <div>
                                <span class='text-slate-600'>Category: <span class='text-slate-900 font-semibold'>Electronics</span></span>
                            </div>
                            <div>
                                <span class='text-slate-600'>Sub-Category: <span class='text-slate-900 font-semibold'>Power Supply Cable</span></span>
                            </div>
                            <div>
                                <span class='text-slate-600'>Edition: <span class='text-slate-900 font-semibold'>old edition. (v.5.3)</span></span>
                            </div>
                            <div>
                                <span class='text-slate-600'>Division: <span class='text-slate-900 font-semibold'>Chattogram</span></span>
                            </div>
                            <div>
                                <span class='text-slate-600'>District: <span class='text-slate-900 font-semibold'>Bandarban</span></span>
                            </div>
                        </div>
                            <div className='mt-5'>
                                <span class='text-slate-900 text-lg font-semibold'>Description</span>
                                <p class='text-slate-600 text-sm'>Worldtech Car Charger Mp3 Player FM Transmitter Bluetooth QC 3.0 PD Type C Car Kit FM Modulator Fast Charging Phone Charger</p>
                            </div>
                            <div className='my-5'>
                                <span class='text-slate-900 text-lg font-semibold'>Features</span>
                                <p class='text-slate-600 text-sm'>1)Bluetooth V5.0
                                    2)12 mode ambient lighting
                                    3)FM transmitter
                                    4)Read U disk
                                    5)Dual USB charger: 5V 3.1A/1A
                                    6)PD charging port：25W
                                    </p>
                                <div className='mt-4'>
                                    <span class='text-slate-600'>age: <span class='text-slate-900 font-semibold'>20-30</span></span><br/>
                                    <span class='text-slate-600'>Material: <span class='text-slate-900 font-semibold'>Plastic</span></span><br/>
                                    <span class='text-slate-600'>Size: <span class='text-slate-900 font-semibold'>59 Inch</span></span><br/>
                                    <span class='text-slate-600'>Style: <span class='text-slate-900 font-semibold'>American</span></span><br/>

                                </div>
                            </div>
                        <hr/>
                        <label htmlFor='my_modal_5' className='btn bg-amber-500 rounded-lg py-0 mt-3 hover:bg-amber-600 transition-all text-white border-0'><MdUpdateDisabled />Report Ads</label>

                        <input type='checkbox' id='my_modal_5' className='modal-toggle' />
                        <div className='modal' role='dialog'>
                            <div className='modal-box p-3 relative'>
                                
                                <label htmlFor="my_modal_5" className=" cursor-pointer absolute top-2 right-2"><GiCrossMark  className='w-6 h-6 hover:text-slate-700 transition-all text-slate-500' /></label>
                                
                                <p className='text-sm font-semibold mb-3'>Is there something wrong with this ad?</p>
                                <p className='text-slate-600 text-sm'>We're constantly working hard to assure that our ads meet high standards and we are very grateful for any kind of feedback from our users.</p>
                                <div className='my-5'>
                                    <label htmlFor='reason'>Reason</label>
                                    <input type='text' id='reason' placeholder='Reason' className='w-full rounded-md px-3 border-2 border-slate-400 my-3' />

                                    <label htmlFor='msg'>Message</label>
                                    <textarea id='msg' placeholder='Your Message' className='w-full rounded-md my-3 px-3 border-2 border-slate-400' rows='3'></textarea>

                                    <div className='modal-action'>
                                        <NavLink className='btn w-full border-0 rounded-md bg-purple-700 hover:bg-purple-800 transition-all text-slate-200'>Send</NavLink>
                                    </div>

                                </div>
                              
                            </div>
                        </div>


                    </div>
                    <div className='col-span-1'>
                        <div className='border-2  py-3 rounded-lg'>
                            <div className='px-2 pb-2 border-b-2'>
                                <h1 className='text-slate-500'>Sales by: <span className='text-slate-900 font-semibold'>James Martine</span></h1>
                                <p className='text-slate-500'>Member since March 2021</p>
                            </div>

                            <div className="px-2 py-3 border-b-2 flex items-start gap-3 cursor-pointer" >

                                <div className='text-white bg-purple-600 flex justify-center p-2 rounded-3xl w-9'> 
                                    <BsTelephonePlusFill  />
                                </div>
                                <div id="phoneNumberContainer" onClick={revealPhoneNumber} className='block'>
                                    <p className='text-slate-700 text-lg text-left font-semibold' >0185XXXXXXX</p>
                                    <p className='text-slate-500 text-xs'>Click to show Phone Number</p>
                                </div>
                                <div id="phoneNum" className='hidden'>
                                    <p className='text-slate-700 text-lg font-semibold'>01647135496</p>
                                </div>
                            </div>

                            <div className="px-2 py-3">
                                <p className='text-slate-700 text-lg font-semibold px-2 pt-1'>All Categories</p>
                                <div className='text-slate-600 text-sm px-2 '>
                                    <NavLink className='block'>Mobile</NavLink>
                                    <NavLink className='block'>Mobile</NavLink>
                                    <NavLink className='block'>Mobile</NavLink>
                                    <NavLink className='block'>Mobile</NavLink>
                                    <NavLink className='block'>Mobile</NavLink>
                                    <NavLink className='block'>Mobile</NavLink>
                                    <NavLink className='block'>Mobile</NavLink>
                                    <NavLink className='block'>Mobile</NavLink>
                                    <NavLink className='block'>Mobile</NavLink>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


            <div className=''>
                <h1 className='text-2xl font-semibold'>Comments</h1><hr/>
                <Comments/>
            </div>
            </div>
            
        </div>
    );
}

export default AdsDetails;