// import Container from "../Layout/Container/page"
import { MdOutlineArrowOutward } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { FaClock } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaSquareYoutube } from "react-icons/fa6";

export default function Footer() {
    return (
      <>
        <div style={{
        background: 'url(../assets/footer.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover' 
    }} className='pt-[200px] lg:pt-[100px]'>
            
            <div className='max-w-container mx-auto px-2.5 sm:px-6 md:px-7 lg:px-10 3xl:px-0'>
                <div className="lg:flex">
                  <div className="lg:w-1/2 flex lg:gap-x-8">
                    <div className="w-1/3">
                      <img src="./assets/logo.png" alt="log" />
                    </div>
                    <div className="w-2/3 text-white font-roboto text-base font-normal  pl-[45px] lg:pl-0 pb-10 lg:pb-0">
                      <p>About</p>
                      <p className="pt-5 pb-4 text-justify lg:pr-[40px] 3xl:pr-[75px]">We have designed our courses with the most demanding professional skills. The knowledge, experience, From the list below you can enroll to any online or offline courses at any time</p>
                      <div className="flex items-center text-base">
                        <a href="" className="hover:border-b-[1px] hover:text-[17px] group-hover:text-primary duration-200">More Info</a>
                        <MdOutlineArrowOutward/>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-1/2 flex">
                    <div className="text-center lg:text-left w-1/2 lg:w-[30%] space-y-[28px] text-base text-white font-roboto font-normal">
                      <p>Discover</p>
                      <ul className='space-y-6'>
                            <li><a className='hover:text-primary' href="">Home</a></li>
                            <li><a className='hover:text-primary' href="">About</a></li>
                            <li><a className='hover:text-primary' href="">Courses</a></li>
                            <li><a className='hover:text-primary' href="">Shop</a></li>
                            <li><a className='hover:text-primary' href="">Contact</a></li>
                        </ul>
                    </div>
                    <div className="w-1/2 lg:w-[70%] font-roboto font-normal text-base text-white space-y-[28px]">
                        <h5>Contact</h5>
                      <div className="flex items-center text-base">
                        <IoCall />
                        <p className="ml-4">Call-centre: (+880) 01*********</p>
                      </div>
                      <div className="flex items-center text-base">
                        <IoMdMail />
                      <p className="ml-4">Email: assessmentuser@gmail.com</p>
                      </div>
                      <div className="flex items-start text-base">
                        <IoLocationSharp />
                      <p className="ml-4 w-full leading-[20px]">House-**, Road-*, Block-*, Taqbir, Turkiye.(Next to City Park, Opposite Road of Alhamdulillah High School)</p>
                      </div>
                      
                      <div className="flex items-center text-base">
                        <FaClock />
                        <p className="ml-4">Office open daily from 9 am to 7 pm.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="flex items-center text-[#F6F6F6] py-[60px]">
                  <div className="w-1/4 lg:w-1/3">
                    <div className="w-full h-px bg-white"></div>
                  </div>
                  <div className="w-2/4 lg:w-1/3">
                    <div className="flex justify-around">
                      <a className="hover:text-primary duration-300 text-2xl" href=""><FaSquareTwitter /></a>
                      <a className="hover:text-primary duration-300 text-2xl" href=""><FaFacebookSquare /></a>
                      <a className="hover:text-primary duration-300 text-2xl" href=""><FaInstagramSquare /></a>
                      <a className="hover:bg-primary duration-300 text-sm text-secondary self-center p-[4px] rounded-sm bg-[#F6F6F6]" href=""><FaTiktok /></a>
                      <a className="hover:text-primary duration-300 text-2xl" href=""><FaSquareWhatsapp /></a>
                      <a className="hover:text-primary duration-300 text-2xl" href=""><FaSquareYoutube /></a>
                    </div>
                  </div>
                  <div className="w-1/4 lg:w-1/3">
                    <div className="w-full h-px bg-white"></div>
                  </div>
                </div>
            </div>
            
                {/* Copyright */}
                <div className="bg-secondary text-center">
                  <p className="py-2 text-sm font-roboto font-normal text-white">© Copyright 2024, Anonymous Tech Ltd, Designed and Developed by <span className="text-primary">Assessment User</span></p>
                </div>

        </div>
      </>
    );
  }
  