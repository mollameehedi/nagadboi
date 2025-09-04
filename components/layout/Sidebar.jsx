import React from 'react'
import logo from '../../public/logo.png';
import Image from 'next/image';

const Sidebar = () => {
  return (
     <aside className=" bg-white  shadow-md hidden md:flex flex-col">
        <div className="text-xl font-bold text-indigo-600 border_bottom_logo leading-[60px]  w-64 text-center">
          <Image src={logo} alt="alt" width={70} height={60} className='h-[60px] w-auto m-auto' />
        </div>
        <nav className="flex-1 space-y-2 w-64 p-6">
          <a href="#" className="flex items-center px-4 py-3 rounded-lg text-gray-700 bg-gray-200 font-semibold hover:bg-gray-300 transition-colors">
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            Dashboard
          </a>
          <a href="#" className="flex items-center px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-200 transition-colors">
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Transactions
          </a>
          <a href="#" className="flex items-center px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-200 transition-colors">
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Reports
          </a>
          <a href="#" className="flex items-center px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-200 transition-colors">
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c1.429-1.393 2.858-2.787 4.287-4.18a.987.987 0 011.666.866v.834a.988.988 0 00.377.784l2.13.916a.988.988 0 01.62.916v1.896a.988.988 0 01-.197.604L19 14l-4-4a2 2 0 10-2-2zm0 0l-4 4" />
            </svg>
            Settings
          </a>
        </nav>
      </aside>
      )}

export default Sidebar