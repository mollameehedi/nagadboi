import React from 'react'
import { FaArrowLeft } from 'react-icons/fa6'
import { GoDownload } from 'react-icons/go'
import { MdOutlineSettings } from 'react-icons/md'
import { RiUploadCloudLine } from 'react-icons/ri'
import { TbUsersPlus } from 'react-icons/tb'

const BreadCum = () => {
  return (
       <div className='px-6'>
        <div className="flex items-center justify-between h-16 border-b-1  sticky top-0 border-gray-200 z-20">
            <div className="flex items-center flex justify-content-between gap-5">
                <span> <FaArrowLeft className='text-gray-600 text-xl font-normal' /></span>
              <span className="text-xl font-medium text-gray-900">Shafi SketchBook</span>
               <span> <MdOutlineSettings className='text-primary text-xl font-normal' /></span>
               <span className='text-lg text-gray-400'>|</span>
               <span><TbUsersPlus  className='text-primary text-xl font-normal'/></span>
            </div>
            <div className="flex items-center space-x-6">
              <button className="rounded text-center text-base focus:ring-4 focus:outline-none focus:ring-opacity-50 disabled:opacity-80 disabled:cursor-not-allowed font-medium gap-2 items-center justify-center inline-flex px-6 h-[40px] bg-transparent hover:border-blue-900 text-primary">
                <RiUploadCloudLine  className='text-xl'/>
                Add Bulk Entire
              </button>
              <button className="rounded text-center focus:ring-4 focus:outline-none focus:ring-opacity-50 disabled:opacity-80 disabled:cursor-not-allowed font-semibold gap-2 items-center justify-center inline-flex border px-6 h-[40px] bg-transparent border-gray-100 shadow-xs hover:border-blue-900 text-blue-900">
                   <GoDownload className='sidebar_item_icon' />
                Report
              </button>
            </div>
          </div>
       </div>
  )
}

export default BreadCum