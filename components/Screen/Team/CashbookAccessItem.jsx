"use client"
import RounIcon from '@/components/Common/RounIcon';
import React from 'react'
import { HiUsers } from 'react-icons/hi';

const CashbookAccessItem = ({ name, access }) => (
  <div className="flex items-center space-x-4 p-2 border-b-1 border-gray-200">
   <RounIcon className='text-base'>
    <HiUsers className='inline-block text-lg text-primary'/>
   </RounIcon>
    <div>
      <h4 className="text-base text-gray-800 font-medium">{name}</h4>
      <p className="text-gray-500 text-sm">{access}</p>
    </div>
  </div>
);

export default CashbookAccessItem