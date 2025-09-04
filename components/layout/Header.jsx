import React from 'react'

const Header = () => {
  return (
   <header className="flex items-center justify-between h-[60px] px-6 bg-white shadow-sm sticky top-0 z-10">
          <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <button className="text-gray-500 hover:text-gray-700">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0a2 2 0 11-4 0m4 0a2 2 0 00-4 0m4 0h2m-2 0h-2m-2-6a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </button>
            <div className="relative">
              <img className="h-10 w-10 rounded-full object-cover cursor-pointer" src="https://placehold.co/40x40/FF5733/FFFFFF?text=P" alt="User Avatar" />
            </div>
          </div>
        </header>
  )
}

export default Header