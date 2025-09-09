"use client"
import Card from '@/components/Common/Card';
import BusinessSettingSidebar from '@/components/Screen/Business/BusinessSettingSidebar';
import React from 'react'
import { BsBoxArrowLeft } from 'react-icons/bs';

const Leave = () => {
   return (
    <BusinessSettingSidebar>
      <div className='w-2/5 px-8 pb-8 mt-6'>
<Card className="p-3">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-sm font-bold text-gray-800">Leave Business</h2>
                <p className="text-sm text-gray-500">You will lose access to this business</p>
              </div>
              <button className="flex items-center space-x-2 text-red-500 text-sm font-normal rounded-lg py-2 px-4 hover:bg-red-50 transition-colors">
                <BsBoxArrowLeft className="w-5 h-5" />
                <span className="font-semibold">Leave business</span>
              </button>
            </div>
          </Card>
      </div>

    </BusinessSettingSidebar>
          
        );
}

export default Leave