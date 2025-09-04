'use client';
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import Slider from "react-slick";
import login_image from '../../public/slider.js.png';
import Image from 'next/image';


const Banner = () => {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
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
                                            src={login_image}
                                            alt="Illustration showing data visualization"
                                            width={500}
                                            height={500}
                                            className="mx-auto w-auto h-auto"
                                        />
                                    </div>
                                    <div>
                                        <Image
                                            src={login_image}
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
  )
}

export default Banner