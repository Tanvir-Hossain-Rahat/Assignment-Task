"use client";
import React, { useState } from 'react'
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
// import Container from '../Layout/Container/page';



export default function Navbar() {
    const [show, setShow]=useState(false);
    const toggle=()=>{
        setShow(!show)
    }
    const handleSearch=()=>{
        console.log("");
    }

    // Login/Register Switch
    

    const [btnOn, setBtnOn]=useState(false)
    const btn=()=>{
        setBtnOn(!btnOn);
    
    }
    

    return (
      <>
       <div className='bg-secondary'>
       <div className='max-w-container mx-auto px-2.5 sm:px-6 xl:px-7 lg:px-10 3xl:px-0'>
        <div className='flex items-center'>
            <div className='w-[20%]'>
                <a href=""><img src="assets/logo.png" alt="logo" /></a>
            </div>
            <div className='w-[60%] flex justify-end lg:justify-between items-center'>
                    <div onClick={toggle} className='lg:hidden'>
                        {
                            show==true ? <IoMdClose className='text-white cursor-pointer'/> : <IoIosArrowDropdownCircle className='text-white cursor-pointer'/>
                        }
                    </div>
                    <div className={`ml-[5%] lg:flex mx-auto items-center font-roboto text-white mobile:text-[12px] text-sm sm:text-base lg:text-sm 3xl:text-base font-normal lg:overflow-visible overflow-hidden lg:static absolute bg-[#222052] w-full right-0 ${show?'top-[48px] sm:top-[58px] md:top-[73px] p-5 duration-300':'h-0'}` } >
                        <ul className='flex justify-center gap-x-5 mobile:gap-x-3 sm:gap-x-8'>
                            <li><a className='hover:text-primary hover:border-b-2 hover:border-primary hover:pb-5 3xl:hover:pb-[28px]' href="">HOME</a></li>
                            <li><a className='hover:text-primary hover:border-b-2 hover:border-primary hover:pb-5 3xl:hover:pb-[28px]' href="">ABOUT</a></li>
                            <li><a className='hover:text-primary hover:border-b-2 hover:border-primary hover:pb-5 3xl:hover:pb-[28px]' href="">COURSES</a></li>
                            <li><a className='hover:text-primary hover:border-b-2 hover:border-primary hover:pb-5 3xl:hover:pb-[28px]' href="">SHOP</a></li>
                            <li><a className='hover:text-primary hover:border-b-2 hover:border-primary hover:pb-5 3xl:hover:pb-[28px]' href="">EVENTS</a></li>
                            <li><a className='hover:text-primary hover:border-b-2 hover:border-primary hover:pb-5 3xl:hover:pb-[28px]' href="">CONTACT</a></li>
                        </ul>
                        
                        
                    </div>
                    <div className='bg-[#222052] rounded-full p-[13px] mr-6 3xl:mr-4 ml-[20px] 3xl:ml-[50px] cursor-pointer text-white hover:text-primary' onClick={handleSearch}>
                            <IoSearchOutline />
                        </div>
            </div>

            {/* Login/Register Toggle Switch */}
            <div className=' mx-auto'>
                <div className={`hidden 3xl:block bg-primary rounded-full w-[110px] h-[50px] top-[12px] z-[11] static absolute cursor-pointer ${btnOn?'3xl:right-[25.9%] duration-500':'duration-500 3xl:right-[20.9%]'}`} onClick={btn}></div>

                <div className='flex justify-center items-center text-white text-[11px] sm:text-[12px] md:text-base w-[110px] 3xl:w-[190px] h-[35px] 3xl:h-[45px] 3xl:border-2 rounded-full'>
                    <p className={`border-y-[1px] border-l-[1px] 3xl:border-l-0 3xl:border-0 rounded-l-full 3xl:ml-2 3xl:mr-6 px-2 sm:px-2.5 md:px-5 3xl:px-0 py-1 sm:py-2 md:py-3 relative absolute z-[12] cursor-pointer ${btnOn?'text-secondary duration-500 bg-primary 3xl:bg-inherit rounded-l-full':''} `} onClick={btn} >Login</p>
                    <p className={`border-y-[1px] border-r-[1px] 3xl:border-r-0 3xl:border-0 rounded-r-full px-2 3xl:ml-6 3xl:mr-2 sm:px-2.5 md:px-5 3xl:px-0 py-1 sm:py-2 md:py-3 relative absolute z-[12] cursor-pointer ${btnOn?'':'bg-primary 3xl:bg-inherit rounded-r-full text-secondary duration-500'}`}onClick={btn}>Register</p>
                    
                    
                </div>
            </div>
        </div>
      </div>
       </div>
      </>
    );
  }