import React from 'react';
import './home.css'
import { FaLongArrowAltRight } from "react-icons/fa";
import {NavLink} from 'react-router-dom'
import { FaSignsPost } from "react-icons/fa6";
import { BsFilePost } from "react-icons/bs";
import { BsQuestionLg } from "react-icons/bs";
import { IoMailOpen } from "react-icons/io5";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaArrowAltCircleRight } from "react-icons/fa";


function Home(props) {
    return (
       <>
         <div className='hero-sec bg-cover bg-center'>
            <div className='container mx-auto py-10'>
                    <div className='grid lg:grid-cols-4 sm:grid-cols-1 gap-10 items-center'>
                        <div className='col-span-2'>
                            <h1 className='text-5xl font-bold pb-4'>BUY OR SELL @ YOUR <br/> CONVENIENCE</h1>
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
            <h2 className='text-2xl font-bold mb-4'>Browse items by category</h2>
            <div className='grid lg:grid-cols-4 sm:grid-cols-1 items-center gap-10'>
                <div className='col-span-3'>

                    <div className='grid lg:grid-cols-4 md:grid-cols-3  gap-5 text-slate-600 items-center sm:grid-cols-2 '>

                        <div className='flex items-end gap-1'>
                            <img src='category/mobiles.png' className='w-12' alt='mobile' />
                           <div>
                                <p>Mobiles</p>
                                <p>16 Ads</p>
                           </div>
                        </div>
                        <div className='flex items-end gap-1'>
                            <img src='category/mobiles.png' className='w-12' alt='mobile' />
                           <div>
                                <p>Mobiles</p>
                                <p>16 Ads</p>
                           </div>
                        </div>
                        <div className='flex items-end gap-1'>
                            <img src='category/mobiles.png' className='w-12' alt='mobile' />
                           <div>
                                <p>Mobiles</p>
                                <p>16 Ads</p>
                           </div>
                        </div>
                        <div className='flex items-end gap-1'>
                            <img src='category/mobiles.png' className='w-12' alt='mobile' />
                           <div>
                                <p>Mobiles</p>
                                <p>16 Ads</p>
                           </div>
                        </div>
                       
                    </div>

                </div>
                <div>
                   <div className='mb-9'>
                        <h1 className='font-semibold text-lg'>GET ACCESS OVER</h1>
                        <h2 className='text-3xl text-pink-600 font-bold'><span className='text-purple-600'>Elite</span> PROPERTY</h2>
                        <p className='text-slate-600 text-sm'>GET a Features Rich Home</p>
                   </div>
                   <div>
                        <h1 className='font-semibold text-lg'>CONNECT OVER</h1>
                        <h2 className='text-3xl text-pink-600 font-bold'><span className='text-purple-600'>EXPERT</span> AGENT</h2>
                        <p className='text-slate-600 text-sm'>to help a get property</p>
                   </div>
                  
                </div>
            </div>
            <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-10 items-center my-6">
                <div className='flex items-center gap-4 shadow-md p-3 rounded-2xl'>
                    <img src='home/moneyLogo.png' alt='money' />
                    <div>
                        <h2 className='text-2xl font-bold mb-4'>Experts Agent</h2>
                        <p className='text-slate-600'>If you want to sell any of your products then you can now. One of the easiest and quickest works</p>
                        <NavLink className='btn bg-amber-400 px-5 py-0 rounded-2xl mt-2 hover:bg-pink-600 text-white transition-all border-0'>Post Ads<BsFilePost /></NavLink>
                    </div>
                </div>
                <div className='flex items-center gap-4 shadow-md p-3 rounded-2xl'>
                    <img src='home/onlineShopping.png' alt='shop' />
                    <div>
                        <h2 className='text-2xl font-bold mb-4'>Buy items at your fingertips</h2>
                        <p className='text-slate-600'>You can easily select your desired product and purchase it from here. It is easy and safe to use.</p>
                        <NavLink className='btn bg-pink-600 px-5 py-0 rounded-2xl mt-2 hover:bg-amber-400 text-white transition-all border-0'>All Ads<FaSignsPost /></NavLink>
                    </div>
                </div>
            </div>
            <div className='flex items-center gap-4 shadow-md p-3 rounded-2xl mt-16'>
                    <img src='home/delivery-guy.png' alt='shop' />
                    <div>
                        <h2 className='text-2xl font-bold mb-4'>Find the right product for you</h2>
                        <p className='text-slate-600'>Get the product directly in  hand and have the facility of fastest delivery. In the case of buying  and selling products, you get the benefit of seeing and understanding , that is, you can see any product with your own hands and then buy and sell it. ad! </p>
                        <NavLink className='btn bg-amber-400 px-5 py-0 rounded-2xl mt-2 hover:bg-pink-600 text-white transition-all border-0'>Shop Now<FaLongArrowAltRight /></NavLink>
                    </div>
                </div>




                <div className='grid lg:grid-cols-3 sm:grid-cols-1 items-center gap-36 mt-16 '>
                   <div className='text-center'>
                        <div className='shadow-md p-5 inline-flex justify-center rounded-lg items-center'>
                            <BsQuestionLg className='w-10 h-10 text-purple-600'/>
                        </div>
                        <div>
                            <h2 className='text-2xl font-bold mb-4'>Phone</h2>
                            <p className='text-slate-600'>If you have to need any help you can call any time. Our teem spend there time for give best service. </p>
                            <p className='text-slate-600 font-semibold'>+88 016471355496</p>


                        </div>
                   </div>
                   <div className='text-center'>
                        <div className='shadow-md p-5 inline-flex justify-center rounded-lg items-center'>
                            <IoMailOpen  className='w-10 h-10 text-purple-600'/>
                        </div>
                        <div>
                            <h2 className='text-2xl font-bold mb-4'>E-mail</h2>
                            <p className='text-slate-600'>If you have want to send massage, You can send email us. We shall back to response very quickly! </p>
                            <p className='text-slate-600 font-semibold'>mobinulislammahi@gmail.com</p>


                        </div>
                   </div>
                   <div className='text-center'>
                        <div className='shadow-md p-5 inline-flex justify-center rounded-lg items-center'>
                            <FaMapLocationDot className='w-10 h-10 text-purple-600'/>
                        </div>
                        <div>
                            <h2 className='text-2xl font-bold mb-4'>Location</h2>
                            <p className='text-slate-600'>Our Company has located in Chittagong, Bangladesh. please visit https://mobinulislam.com  </p>
                            <p className='text-slate-600 font-semibold'>Eidgah, Cox’sBazar</p>


                        </div>
                   </div>
                </div>


                <div className='grid lg:grid-cols-2 sm:grid-cols-1 items-center gap-20 mt-16'>
                    <div className='text-slate-600'>
                        <h2 className='text-2xl font-bold mb-4'>User Documents For Everyone </h2>
                        <p className='text-slate-600'>Real users will complete the registration by providing the email. Once the registration is completed, users can easily access the website. You can update your profile by going to the Personal Profile section. If users want to advertise, they have to advertise through the advertiser form. After adding the ad users have to wait for approval which will be available access by the website owner.</p>
                        <span className='flex items-start gap-2'>
                            <FaArrowAltCircleRight className='text-pink-600 mt-1' />
                            <p>Buy and Sell any Products.</p>
                        </span>

                        <span className='flex items-start gap-2'>
                            <FaArrowAltCircleRight className='text-pink-600 mt-1' />
                            <p>Any irrelevant product offered for sale will be rejected.</p>
                        </span>

                        <span className='flex gap-2'>
                            <FaArrowAltCircleRight className='text-pink-600 mt-1 flex-shrink-0' />
                            <p>Requested not to provide any personal and sensitive information. This responsibility will never be accepted by the website authority. </p>
                        </span>
                    </div>
                    <div>
                        <img src='home/server.png' alt='server' />
                    </div>
                </div>

        </div>
       </>
    );
}

export default Home;