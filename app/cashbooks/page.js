'use client';

import React, { useState } from 'react';
import { FaUserFriends } from 'react-icons/fa';
import { FaUsers } from 'react-icons/fa6';
import { MdKeyboard, MdOutlineContentCopy, MdOutlineModeEdit, MdOutlineTurnRight } from 'react-icons/md';
import { TbUsersPlus } from 'react-icons/tb';

const CashBook = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('Last Updated');
  const [hoveredBook, setHoveredBook] = useState(null);

  const handleDropdownToggle = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleMouseEnter = (bookName) => {
    setHoveredBook(bookName);
  };

  const handleMouseLeave = () => {
    setHoveredBook(null);
  };

  

  return (
    <div className="bg-white min-h-screen font-sans antialiased flex flex-col">
      {/* Top Header */}
      <div className="flex items-center justify-between h-16 px-6  sticky top-0 z-20">
        <div className="flex items-center">
          <span className="text-xl font-bold text-indigo-600">Easy</span>
        </div>
        <div className="flex items-center space-x-6">
          <button className="rounded text-center focus:ring-4 focus:outline-none focus:ring-opacity-50 disabled:opacity-80 disabled:cursor-not-allowed font-normal gap-2 items-center justify-center inline-flex px-6 h-[40px] bg-transparent hover:border-blue-900 text-gray-400">
            <MdKeyboard />
            Shortcuts
          </button>
          <button className="rounded text-center focus:ring-4 focus:outline-none focus:ring-opacity-50 disabled:opacity-80 disabled:cursor-not-allowed font-semibold gap-2 items-center justify-center inline-flex border px-6 h-[40px] bg-transparent border-gray-100 shadow-xs hover:border-blue-900 text-blue-900">
               <FaUsers className='sidebar_item_icon' /> 
            Business Team
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-8">
        {/* Role and Search Section */}
        <div className="mb-8 w-full">
          <div className="bg-orange-100 text-orange-800 rounded-lg py-2 px-4 inline-flex w-full items-center text-sm font-medium">
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Your Role: <span className='text-gray-800 font-medium '>Partner</span> <a href="#" className="underline ml-1">View</a>
          </div>
        </div>

        {/* Main Content Area */}
        {/* Main Content Area */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Books List */}
          <div className="flex-1 space-y-4">
            <div className="flex flex-col sm:flex-row items-center justify-content-start gap-4">
              <div className="relative w-2/5">
                <input
                  type="text"
                  placeholder="Search by book name..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="w-full pl-3 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200 placeholder:text-gray-400"
                />
                <svg className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <div className="flex items-center space-x-4 w-full sm:w-auto">
                <select
                  value={sortBy}
                  onChange={handleSortChange}
                  className="flex-1 py-2 px-4 border-1 border-gray-200 text-gray-900 rounded-lg focus:outline-none text-sm focus:ring-2 focus:ring-indigo-200 placeholder:text-gray-900"
                >
                  <option>Sort By: Last Updated</option>
                  <option>Sort By: A-Z</option>
                </select>
              </div>
            </div>

             <div className="flex-1 space-y-4">


            {/* Book Entries */}
            <div className="space-y-4">
              {/* Shafi SketchBook */}
              <div className="bg-white p-4 border-b-1 border-gray-200 flex items-center justify-between"
                   onMouseEnter={() => handleMouseEnter('Shafi SketchBook')}
                   onMouseLeave={handleMouseLeave}>
                <div className="flex items-center space-x-4">
                <span className='bg-primary/10 rounded-full text-lg w-[40px] h-[40px] text-center leading-[40px]'>

                      <FaUserFriends  className='text-base text-primary inline-block'/>
                </span>
                  <div>
                    <h4 className="text-lg text-gray-900 font-medium">Shafi SketchBook</h4>
                    <p className="text-gray-500 text-sm">2 members • Updated 20 days ago</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-green-600 font-bold">100</span>
                  <div className={`flex items-center space-x-2 transition-opacity duration-300 ${hoveredBook === 'Shafi SketchBook' ? 'block' : 'hidden'}`}>
                    <button className="text-gray-400 hover:text-blue-600 text-2xl">
                      <MdOutlineModeEdit />
                    </button>
                    <button className="text-gray-400 hover:text-blue-600 text-2xl">
                      <MdOutlineContentCopy />
                    </button>
                    <button className="text-gray-400 hover:text-blue-600 text-2xl">
                      <TbUsersPlus />
                    </button>
                    <button className="text-gray-400 hover:text-blue-600 text-2xl">
                      <MdOutlineTurnRight />
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-white p-4 border-b-1 border-gray-200 flex items-center justify-between"
                   onMouseEnter={() => handleMouseEnter('Office Expence')}
                   onMouseLeave={handleMouseLeave}>
                <div className="flex items-center space-x-4">
                <span className='bg-primary/10 rounded-full text-lg w-[40px] h-[40px] text-center leading-[40px]'>

                      <FaUserFriends  className='text-base text-primary inline-block'/>
                </span>
                  <div>
                    <h4 className="text-lg text-gray-900 font-medium">Office Expence</h4>
                    <p className="text-gray-500 text-sm">2 members • Updated 20 days ago</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-green-600 font-bold">100</span>
                  <div className={`flex items-center space-x-2 transition-opacity duration-300 ${hoveredBook === 'Office Expence' ? 'block' : 'hidden'}`}>
                    <button className="text-gray-400 hover:text-blue-600 text-2xl">
                      <MdOutlineModeEdit />
                    </button>
                    <button className="text-gray-400 hover:text-blue-600 text-2xl">
                      <MdOutlineContentCopy />
                    </button>
                    <button className="text-gray-400 hover:text-blue-600 text-2xl">
                      <TbUsersPlus />
                    </button>
                    <button className="text-gray-400 hover:text-blue-600 text-2xl">
                      <MdOutlineTurnRight />
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-white p-4 border-b-1 border-gray-200 flex items-center justify-between"
                   onMouseEnter={() => handleMouseEnter('Business Book')}
                   onMouseLeave={handleMouseLeave}>
                <div className="flex items-center space-x-4">
                <span className='bg-primary/10 rounded-full text-lg w-[40px] h-[40px] text-center leading-[40px]'>

                      <FaUserFriends  className='text-base text-primary inline-block'/>
                </span>
                  <div>
                    <h4 className="text-lg text-gray-900 font-medium">Business Book</h4>
                    <p className="text-gray-500 text-sm">2 members • Updated 20 days ago</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-green-600 font-bold">100</span>
                  <div className={`flex items-center space-x-2 transition-opacity duration-300 ${hoveredBook === 'Business Book' ? 'block' : 'hidden'}`}>
                    <button className="text-gray-400 hover:text-blue-600 text-2xl">
                      <MdOutlineModeEdit />
                    </button>
                    <button className="text-gray-400 hover:text-blue-600 text-2xl">
                      <MdOutlineContentCopy />
                    </button>
                    <button className="text-gray-400 hover:text-blue-600 text-2xl">
                      <TbUsersPlus />
                    </button>
                    <button className="text-gray-400 hover:text-blue-600 text-2xl">
                      <MdOutlineTurnRight />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Add New Book Section */}
            <div className="bg-white p-4 rounded-lg shadow space-y-4">
              <div className="flex items-center space-x-4">
                <svg className="w-8 h-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h4 className="text-lg font-medium">Add New Book</h4>
                  <p className="text-gray-500 text-sm">Click to quickly add books for</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <button className="px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-100 transition-colors">
                  September Expenses
                </button>
                <button className="px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-100 transition-colors">
                  Project Book
                </button>
                <button className="px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-100 transition-colors">
                  2025 Ledger
                </button>
                <button className="px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-100 transition-colors">
                  Staff Salary
                </button>
              </div>
            </div>
          </div>

          </div>

          {/* Right Sidebar */}
          <div className="lg:w-80 space-y-4">
            <div className="bg-white p-6 rounded-lg shadow space-y-4">
              <div className="flex items-center space-x-2 text-green-600">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-8a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1zm-2 2a1 1 0 011-1h4a1 1 0 110 2h-4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">Login via Email ID</span>
              </div>
              <p className="text-gray-500 text-sm">Verify email to login to mobile app & desktop</p>
              <button className="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                Add Email
              </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow space-y-4">
              <div className="flex items-center space-x-2 text-green-600">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008.854 6.6L7.172 7.747a1 1 0 00-.51 1.493l1.24 2.149a1 1 0 001.35 0L12 9.475a1 1 0 00-.51-1.493l-1.682-1.147z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">Need help in business setup?</span>
              </div>
              <p className="text-gray-500 text-sm">Our support team will help you</p>
              <a href="#" className="flex items-center text-blue-600 font-semibold hover:text-blue-700">
                Contact Us
                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CashBook;
