import Image from 'next/image'
import React from 'react'
import logo from '../../public/login.svg';
import { FcGoogle } from 'react-icons/fc';
import { MdOutlineMailOutline } from 'react-icons/md';
import Link from 'next/link';

const Registration = () => {
  return (
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
                                    <Link href="/login" className="auth_button">
                                        <span className="ml-3">Other Ways To Login</span>
                                    </Link>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
  )
}

export default Registration