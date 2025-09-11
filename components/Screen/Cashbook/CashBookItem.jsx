"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { FaUserFriends } from 'react-icons/fa'
import { MdOutlineContentCopy, MdOutlineModeEdit, MdOutlineTurnRight } from 'react-icons/md'
import { TbUsersPlus } from 'react-icons/tb'

const CashBookItem = ({ name,balance,updatedDays,memeber , onRenameBook, onCopyBook, onAddUsers, onLeaveBook }) => {
    const [hoveredBook, setHoveredBook] = useState(null);
    const [isRenameModalOpen, setIsRenameModalOpen] = useState(false);




      const handleMouseEnter = (bookName) => {
    setHoveredBook(bookName);
  };

  const handleMouseLeave = () => {
    setHoveredBook(null);
  };
  return (
    <>
     <Link href="/dashboard/cashbooks/mehedi" className="bg-white p-4 border-b-1 border-gray-200 flex items-center justify-between"
                       onMouseEnter={() => handleMouseEnter(name)}
                       onMouseLeave={handleMouseLeave}>
                    <div className="flex items-center space-x-4">
                    <span className='bg-primary/10 rounded-full text-lg w-[40px] h-[40px] text-center leading-[40px]'>
    
                          <FaUserFriends  className='text-base text-primary inline-block'/>
                    </span>
                      <div>
                        <h4 className="text-lg text-gray-900 font-medium">{name}</h4>
                        <p className="text-gray-500 text-sm">{memeber} members • Updated {updatedDays} days ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-green-600 font-bold">{balance}</span>
                      <div className={`flex items-center space-x-2 transition-opacity duration-300 ${hoveredBook === name ? 'block' : 'hidden'}`}>
                        <button className="text-primary text-2xl cursor-pointer" onClick={(e) => {
              e.preventDefault();
              onRenameBook();
            }}>
                          <MdOutlineModeEdit />
                        </button>
                        <button className="text-primary text-2xl cursor-pointer" onClick={(e) => {onLeaveBook()}}>
                          <MdOutlineContentCopy />
                        </button>
                        <button className="text-primary text-2xl cursor-pointer" onClick={(e) => {onAddUsers()}}>
                          <TbUsersPlus />
                        </button>
                        <button className="text-red-700 text-2xl cursor-pointer">
                          <MdOutlineTurnRight  onClick={(e) => {onLeaveBook()}}/>
                        </button>
                      </div>
                    </div>
                  </Link>
    
    </>
   

                  
  )
}

export default CashBookItem