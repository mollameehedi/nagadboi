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
import { IoMdArrowDropright } from 'react-icons/io';
import SidebarItem from '../Common/SideBarItem';

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
        <nav className="w-64 py-4 px-0">

           <SidebarItem text="Book Keeping" name="book_keeping" activeDropdownName={activeDropdown} onDropdownToggle={handleDropdownToggle} getNavLinkClass={getNavLinkClass} >
          <Link href="/dashboard/cashbooks" className={`sidebar_item ${getNavLinkClass('/dashboard/cashbooks')}`}>
            <TbWallet className='sidebar_item_icon' /> Cahsbook
          </Link>
        </SidebarItem>

           <SidebarItem text="Setting" name="setting"  activeDropdownName={activeDropdown} onDropdownToggle={handleDropdownToggle} getNavLinkClass= {getNavLinkClass} >
            <Link href="/dashboard/team" className={`sidebar_item ${getNavLinkClass('/dashboard/team')}`}>
              <FaUsers className='sidebar_item_icon' /> Team
            </Link>
            <Link href="/dashboard/business-settings/setting" className={`sidebar_item ${getNavLinkClass('/dashboard/business-settings/setting')}`}>
              <MdOutlineSettings className='sidebar_item_icon' /> Business Setting
            </Link>
            <Link href="/dashboard/subscription" className={`sidebar_item ${getNavLinkClass('/dashboard/subscription')}`}>
              <CiViewList className='sidebar_item_icon' /> Subscription
            </Link>
        </SidebarItem>

          <SidebarItem text="Others" name="others"  activeDropdownName={activeDropdown} onDropdownToggle={handleDropdownToggle} getNavLinkClass= {getNavLinkClass} >
            <Link href="/support" className={`sidebar_item ${getNavLinkClass('/support')}`}>
              <MdOutlineSettings className='sidebar_item_icon' />  Help & Support
            </Link>
        </SidebarItem>


        </nav>
      </aside>
      )}

export default Sidebar