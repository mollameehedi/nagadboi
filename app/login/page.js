'use client';

import Image from 'next/image';
import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Corrected import line for react-slick
import Slider from "react-slick";

import login_image from '../assets/login.svg';
import login_image_2 from '../assets/login.svg'; // Assuming you have a second image
import login_image_3 from '../assets/login.svg'; // Assuming you have a third image
import logo from '../assets/logo.png';
import { FcGoogle } from 'react-icons/fc';
import { MdOutlineMailOutline } from 'react-icons/md';

const Login = () => {
    // Slider settings
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
         appendDots: (dots) => (
            <div
                style={{
                    bottom: "30px",
                    position: "absolute",
                    width: "100%",
                    textAlign: "center",
                }}
            >
                <ul className="flex justify-center space-x-2"> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div className="w-2 h-2 rounded-full border-2 border-primary bg-white p-1 transition-all duration-300"></div>
        ),
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="bg-white min-h-screen shadow-xl rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-3">
                {/* Left side: Slick Slider for images (col-span-1) */}
                <div className="hidden md:block col-span-1 p-4 bg-indigo-100 ">
                   <div className='flex items-center justify-center min-h-full w-full'> 
                    <div className='w-2/3 auth_banner '> 
<Slider {...settings}>
                        <div>
                            <Image
                                src={login_image}
                                alt="Illustration showing financial tracking"
                                width={500}
                                height={500}
                                className="mx-auto w-auto h-auto"
                            />
                            <p className="text-xl text-gray-900 font-semibold pt-10">Download and Share PDF & Excel Report</p>
                        </div>
                        <div>
                            <Image
                                src={login_image_2}
                                alt="Illustration showing data visualization"
                                width={500}
                                height={500}
                                className="mx-auto w-auto h-auto"
                            />
                        </div>
                        <div>
                            <Image
                                src={login_image_3}
                                alt="Illustration of a person managing money"
                                width={500}
                                height={500}
                                className="mx-auto w-auto h-auto"
                            />
                        </div>
                    </Slider>
                    </div>
                     
                   </div>
                </div>

                {/* Right side: Login form (col-span-2) */}
                <div className="col-span-1 md:col-span-2 flex flex-col items-center justify-center p-6 sm:p-12">
                    <div className='flex items-center justify-content-center'>
                            <div className='w-[385px]'>
                                 <div className=" text-center mb-6">
                        <Image src={logo} height={40} alt="Cashbook app logo" className="mx-auto" />
                    </div>

                        <h1 className="text-3xl font-bold text-gray-900 mb-10 text-center">
                            Log In/Create Account
                        </h1>
                    <div className="w-full max-w-md flex flex-col items-center border p-8 rounded-lg">

                        <div className="space-y-4">
                            <p className="text-gray-600  text-base font-medium mb-4">Choose one option to continue</p>
                            
                            <button className="auth_button">
                                <FcGoogle size={20} />
                                <span className="ml-3">Sign Up with Google</span>
                            </button>
                            
                            <button className="auth_button">
                                <MdOutlineMailOutline size={20} />
                                <span className="ml-3">Sign Up with Email</span>
                            </button>

                        <div className="text-sm text-gray-500">
                            <p className="mb-2 text-sm font-regular ">
                                By continuing, you are indicating that you accept our<a href="#" className=" text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>.
                            </p>
                        </div>
                         <div className="relative flex justify-center text-sm">
                                <span className="bg-white px-2 text-gray-500 font-semibold">OR</span>
                            </div>
                        <button className="auth_button">
                                <span className="ml-3">Other Ways To Login</span>
                            </button>
                        </div>
                        
                       
                    </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;