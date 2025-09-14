"use client"
import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io';

const AddMemberModal = ({ isOpen, onClose }) => {
  const [mobileNumber, setMobileNumber] = useState('');

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 bg-gray-600/40 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className={`fixed top-0 flex justify-between flex-col right-0 h-full w-full max-w-xl bg-white shadow-lg transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
       <div>
         {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h3 className="text-xl font-medium text-gray-900">Add team member</h3>
          <button onClick={onClose} className='p-2 cursor-pointer'>
            <IoMdClose />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1 text-sm">Add Email</label>
            <input 
              type="text" 
              className="w-full px-4 py-2 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              placeholder="eg. xyz123@gmail.com"
            />
          </div>
        </div>
       </div>
        
        {/* Footer */}
        <div className="p-4 border-t border-gray-200 flex justify-end space-x-3">
          <button className="rounded text-center  font-normal gap-2 items-center justify-center inline-flex min-w-[120px] border px-6 h-[48px] text-primary border-gray-200 cursor-pointer">Add With Mobile Number</button>
          <button className="rounded text-center focus:ring-4 focus:outline-none focus:ring-opacity-50 disabled:opacity-80 disabled:cursor-not-allowed font-semibold gap-2 items-center justify-center inline-flex min-w-[120px] border px-6 h-[48px] text-white border-primary bg-primary cursor-pointer">Next</button>
        </div>
      </div>
    </div>
  );
};


export default AddMemberModal