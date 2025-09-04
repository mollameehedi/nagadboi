'use client';

import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import logo from '../../public/logo.png';
import { FcGoogle } from 'react-icons/fc';
import { MdOutlineMailOutline } from 'react-icons/md';
import Link from 'next/link';

const LoginForm = () => {

    const [mobileNumber, setMobileNumber] = useState('');
    const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);

    // List of countries with their flags and codes
    const countries = [
        { name: 'United States', code: '+1', flagUrl: 'https://flagcdn.com/us.svg' },
        { name: 'India', code: '+91', flagUrl: 'https://flagcdn.com/in.svg' },
        { name: 'United Kingdom', code: '+44', flagUrl: 'https://flagcdn.com/gb.svg' },
        { name: 'Canada', code: '+1', flagUrl: 'https://flagcdn.com/ca.svg' },
        { name: 'Australia', code: '+61', flagUrl: 'https://flagcdn.com/au.svg' },
        { name: 'Germany', code: '+49', flagUrl: 'https://flagcdn.com/de.svg' },
        { name: 'France', code: '+33', flagUrl: 'https://flagcdn.com/fr.svg' },
        { name: 'Japan', code: '+81', flagUrl: 'https://flagcdn.com/jp.svg' },
        { name: 'China', code: '+86', flagUrl: 'https://flagcdn.com/cn.svg' },
        { name: 'Brazil', code: '+55', flagUrl: 'https://flagcdn.com/br.svg' },
        { name: 'Mexico', code: '+52', flagUrl: 'https://flagcdn.com/mx.svg' },
        { name: 'South Africa', code: '+27', flagUrl: 'https://flagcdn.com/za.svg' },
        { name: 'Russia', code: '+7', flagUrl: 'https://flagcdn.com/ru.svg' },
        { name: 'Argentina', code: '+54', flagUrl: 'https://flagcdn.com/ar.svg' },
        { name: 'South Korea', code: '+82', flagUrl: 'https://flagcdn.com/kr.svg' },
    ];

    const [selectedCountry, setSelectedCountry] = useState(countries[0]);

    const handleSendOtp = () => {
        // Placeholder for OTP sending logic
        console.log(`Sending OTP to: ${selectedCountry.code}${mobileNumber}`);
    };

    // Helper to handle clicks outside the dropdown to close it
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.country-dropdown')) {
                setIsCountryDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="col-span-1 md:col-span-2 flex flex-col items-center justify-center p-6 sm:p-12">
            <div className='flex items-center justify-content-center'>
                <div className='w-[385px]'>
                    <div className=" text-center mb-6">
                        <Image src={logo} height={40} alt="Cashbook app logo" className="mx-auto" />
                    </div>

                    <h1 className="text-3xl font-bold text-gray-900 mb-10 text-center">
                        Log In
                    </h1>
                    <div className="w-full max-w-md flex flex-col items-center border p-8 rounded-lg">

                        <div className="space-y-4">
                            <p className="text-gray-900  text-base  mb-4 font-semobold">Enter your mobile Number</p>

                           
          <div className="flex w-full mb-4 mt-1 space-x-2 relative country-dropdown">
            {/* Custom Country Code Dropdown */}
            <div
              className="relative flex items-center bg-white border border-gray-300 rounded-lg shadow-sm cursor-pointer py-3 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
            >
              <img src={selectedCountry.flagUrl} alt={`${selectedCountry.name} flag`} className="w-6 h-4 mr-2" />
            </div>

            {/* Dropdown Menu */}
            {isCountryDropdownOpen && (
              <ul className="absolute z-10 top-full mt-1 left-0 w-48 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                {countries.map((country) => (
                  <li
                    key={country.code}
                    className="flex items-center p-3 hover:bg-gray-600 cursor-pointer transition-colors duration-150"
                    onClick={() => {
                      setSelectedCountry(country);
                      setIsCountryDropdownOpen(false);
                    }}
                  >
                    <img src={country.flagUrl} alt={`${country.name} flag`} className="w-6 h-4 mr-2" />
                    <span>{country.name} ({country.code})</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Mobile Number Input */}
            <input
              type="tel"
              name="number"
              placeholder="Mobile number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              className="flex-1 py-2 px-4 rounded-lg border  leading-[24px] text-gray-600 border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <button
            onClick={handleSendOtp}
            className="w-full flex items-center justify-center py-2  mt-3 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span>Send OTP</span>
          </button>


                            <div className="relative flex justify-center text-sm">
                                <span className="bg-white px-2 text-gray-500 font-semibold">OR</span>
                            </div>
                            <Link href="/registration" className="auth_button">
                                <span className="ml-3">Other Ways To Login</span>
                            </Link>

                            <div className="text-sm text-gray-500">
                                <p className="mb-2 text-sm font-regular ">
                                    By clicking send OTP, you are indicating that you accept our <a href="#" className=" text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>  An SMS may be sent. Message & data rates may apply..
                                </p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;