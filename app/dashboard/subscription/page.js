import Image from 'next/image';
import React from 'react'
import { IoIosCloseCircle } from 'react-icons/io';
import favicon from  '@/public/favicon.png';

const Subscription = () => {
  return (
    <div className='w-2/5 flex-1 p-8 space-y-6'>
        <div className="bg-white rounded-lg shadow-sm p-6 flex justify-between items-center border-l-4 border-gray-500/30">
          <div className="flex items-center space-x-4 self-start">
            <Image src={favicon} height={50} width={50} className='self-start'/>
            <div>
              <p className="text-gray-800 text-sm font-semibold">CashBooks Subscription</p>
              <h2 className="text-xl font-bold text-gray-900 mt-1">Essentials Plan</h2>
              <div className="text-xs text-gray-500 mt-1">
                Since August 12, 2025<br />
                Expired on August 27, 2025
              </div>
            </div>
          </div>
          <div className="flex items-center text-gray-900 text-sm font-medium space-x-1 p-2 rounded-sm bg-red-100">
            <IoIosCloseCircle className="w-4 h-4" />
            <span>Inactive</span>
          </div>
        </div>
                <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
          <div className="">
            <h3 className="text-xl font-medium text-gray-800">Subscription Details</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-xs text-gray-500">Billing Period</p>
              <p className="text-lg font-medium text-gray-800">month</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Start Date</p>
              <p className="text-lg font-medium text-gray-800">August 12, 2025</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">End Date</p>
              <p className="text-lg font-medium text-gray-800">August 27, 2025</p>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-3">
            <h3 className="text-lg font-normal text-gray-800">Plan Features & Limits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div>
                <p className="text-xs text-gray-500">Business Limit</p>
                <p className="text-lg font-medium text-gray-800">2</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Members per Business</p>
                <p className="text-lg font-medium text-gray-800">4</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Subscription