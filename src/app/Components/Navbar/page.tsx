"use client";
import React, { useState } from 'react'
import {AiOutlineBars} from "react-icons/ai";
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
       <div className='max-w-container mx-auto px-2.5 sm:px-6 md:px-7 lg:px-10 xl:px-0'>
        <div className='flex items-center'>
            <div className='w-[20%]'>
                <a href=""><img src="assets/logo.png" alt="logo" /></a>
            </div>
            <div className='w-[60%] flex justify-between items-center'>
                    <div onClick={toggle} className='md:hidden'>
                        {
                            show==true ? <IoMdClose className='text-white'/> : <AiOutlineBars className='text-white'/>
                        }
                    </div>
                    <div className={`ml-[5%] md:flex mx-auto items-center font-roboto text-white text-base font-normal h-0 md:overflow-visible overflow-hidden md:static absolute bg-primary right-0 ${show?'h-[230px] top-[140px] p-5 duration-300':'h-0'}` } >
                        <ul className='md:flex gap-x-8 pb-3 md:pb-0'>
                            <li><a className='hover:text-primary hover:border-b-2 hover:border-primary hover:pb-[28px]' href="">HOME</a></li>
                            <li><a className='hover:text-primary hover:border-b-2 hover:border-primary hover:pb-[28px]' href="">ABOUT</a></li>
                            <li><a className='hover:text-primary hover:border-b-2 hover:border-primary hover:pb-[28px]' href="">COURSES</a></li>
                            <li><a className='hover:text-primary hover:border-b-2 hover:border-primary hover:pb-[28px]' href="">SHOP</a></li>
                            <li><a className='hover:text-primary hover:border-b-2 hover:border-primary hover:pb-[28px]' href="">EVENTS</a></li>
                            <li><a className='hover:text-primary hover:border-b-2 hover:border-primary hover:pb-[28px]' href="">CONTACT</a></li>
                        </ul>
                        
                        
                    </div>
                    <div className='bg-[#222052] rounded-full p-[13px] ml-[70px] cursor-pointer text-white hover:text-primary' onClick={handleSearch}>
                            <IoSearchOutline />
                        </div>
            </div>

            {/* Login/Register Toggle Switch */}
            <div className='ms-auto'>
                <div className={`bg-primary rounded-full w-[110px] h-[50px] top-[12px] z-[11] absolute cursor-pointer ${btnOn?'right-[13%] duration-500':'duration-500 right-[5.7%]'}`} onClick={btn}></div>
                <div className='flex justify-center items-center text-white text-sm w-[190px] h-[45px] border-2 rounded-full'>
                    <p className={`mr-[22px] py-3 text-base relative absolute z-[12] cursor-pointer ${btnOn?'text-secondary duration-500':''} `} onClick={btn} >Login</p>
                    <p className={`ml-[22px] py-3 text-base relative absolute z-[12] cursor-pointer ${btnOn?'':'text-secondary duration-500'}`}onClick={btn}>Register</p>
                    
                    
                </div>
            </div>
        </div>
      </div>
       </div>
      </>
    );
  }