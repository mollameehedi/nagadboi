"use client"
import React, { useState } from 'react'
import logo from '../../public/logo.png';
import Image from 'next/image';
import { CiViewList } from "react-icons/ci";
import { FaUsers } from "react-icons/fa6";
import { MdOutlineSettings } from 'react-icons/md';
import { TbWallet } from 'react-icons/tb';
import Link from 'next/link';
import { usePathname } from 'next/navigation'

const Sidebar = () => {
   const [activeDropdown, setActiveDropdown] = useState(null);

   const pathname = usePathname()
    const getNavLinkClass = (path) =>
     {
      
      return pathname == path ? 'active-link' : 'nai';
    };


  const handleDropdownToggle = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };
  return (
     <aside className=" bg-white  shadow-md hidden md:flex flex-col border-r-1 border-gray-200">
        <div className="text-xl font-bold text-indigo-600 border_bottom_logo leading-[60px]  w-64 text-center">
        <Link href="/dashboard/cashbooks">
          <Image src={logo} alt="alt" width={70} height={60} className='h-[60px] w-auto m-auto cursor-pointer' />
          </Link>
        </div>
        <nav className="flex-1 space-y-2 w-64 py-4 px-0">
          {/* book_keeping Dropdown */}
          <div>
            <button onClick={() => handleDropdownToggle('book_keeping')}  className={`sidebar_item`}>
                Book Keeping
              <svg className={`w-4 h-4 ml-auto transform transition-transform duration-200 ${activeDropdown === 'book_keeping' ? 'rotate-90' : 'rotate-0'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            {activeDropdown === 'book_keeping' && (
              <div className="ml-4 mt-1 space-y-1">
                <Link href="/dashboard/cashbooks" className={`sidebar_item ${getNavLinkClass('/dashboard/cashbooks')}`}>
              <TbWallet  className='sidebar_item_icon' />    Cahsbook
                </Link>
              </div>
            )}
            <button onClick={() => handleDropdownToggle('settings')} className="flex items-center w-full px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-200 transition-colors focus:outline-none">
                Settings
              <svg className={`w-4 h-4 ml-auto transform transition-transform duration-200 ${activeDropdown === 'settings' ? 'rotate-90' : 'rotate-0'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            {activeDropdown === 'settings' && (
              <div className="ml-4 mt-1 space-y-1">
                <Link href="/dashboard/team"  className={`sidebar_item ${getNavLinkClass('/dashboard/team')}`}>
              <FaUsers className='sidebar_item_icon' />    Team
                </Link>
                <Link href="/dashboard/business-settings/setting"  className={`sidebar_item ${getNavLinkClass('/dashboard/business-settings/setting')}`}>
              <MdOutlineSettings className='sidebar_item_icon' />    Business Setting
                </Link>
                <a href="/dashboard/subscription"  className={`sidebar_item ${getNavLinkClass('/dashboard/subscription')}`}>
              <CiViewList className='sidebar_item_icon' />    Subscription
                </a>
              </div>
            )}
            <button onClick={() => handleDropdownToggle('others')} className="flex items-center w-full px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-200 transition-colors focus:outline-none">
                Others
              <svg className={`w-4 h-4 ml-auto transform transition-transform duration-200 ${activeDropdown === 'others' ? 'rotate-90' : 'rotate-0'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            {activeDropdown === 'others' && (
              <div className="ml-4 mt-1 space-y-1">
                <Link href="/support"  className={`sidebar_item ${getNavLinkClass('/dashboard/support')}`}>
              <MdOutlineSettings className='sidebar_item_icon' />    Help & Support
                </Link>
              </div>
            )}
          </div>
        </nav>
      </aside>
      )}

export default Sidebar