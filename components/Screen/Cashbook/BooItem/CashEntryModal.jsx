"use client"
import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io';
import { MdAttachFile } from 'react-icons/md';

const CashEntryModal = ({ isOpen, onClose }) => {
  const [entryType, setEntryType] = useState('cashIn');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [time, setTime] = useState(new Date().toTimeString().split(' ')[0].substring(0, 5));
  
  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 bg-gray-600/40 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className={`fixed top-0 p-3 right-0 h-full flex justify-between flex-col w-full max-w-xl bg-white shadow-lg transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
       <div>
         {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h3 className={`text-xl font-medium text-gray-900 ${entryType === 'cashIn' ? 'text-green-700' : 'text-red-700'}`}>Add Cash In Entry</h3>
          <button onClick={onClose} className='p-2 cursor-pointer'>
            <IoMdClose />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="flex space-x-2 mb-6">
            <button
              className={`px-4 py-2 rounded-full border border-gray-200 text-sm font-normal cursor-pointer  ${entryType === 'cashIn' ? 'bg-green-700 text-white forn-normal' : ' text-gray-800'}`}
              onClick={() => setEntryType('cashIn')}
            >
              Cash In
            </button>
            <button 
              className={`px-4 py-2 rounded-full border border-gray-200 text-sm font-normal  cursor-pointer ${entryType === 'cashOut' ? 'bg-red-700 text-white forn-normal' : ' text-gray-800'}`}
              onClick={() => setEntryType('cashOut')}
            >
              Cash Out
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Date *</label>
              <div className="relative">
                <input 
                  type="date" 
                  className="w-full px-4 py-2 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Time *</label>
              <div className="relative">
                <input 
                  type="time" 
                  className="w-full px-4 py-2 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
            </div>
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-1">Amount <span className='text-red-700'>*</span></label>
            <input 
              type="text" 
              className="w-full px-4 py-2 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
              placeholder="e.g. 890 or 100 + 200 + 3"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-1">Contact Name</label>
            <select className="w-full px-4 py-2 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Search or Select</option>
              <option>John Doe</option>
              <option>Jane Smith</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-1">Remarks</label>
            <input 
              type="text" 
              className="w-full px-4 py-2 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
              placeholder="e.g. Enter Details (Name, Bill No, Item Name, Quantity etc)"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">Category</label>
              <select className="w-full px-4 py-2 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Search or Select</option>
                <option>Fuel</option>
                <option>Groceries</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">Payment Mode</label>
              <select className="w-full px-4 py-2 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Cash</option>
                <option>Online</option>
              </select>
            </div>
          </div>
          
          <div className="mb-6">
            <button className="flex items-center  space-x-1 text-primary rounded-sm border px-5 p-1 border-gray-200 hover:text-blue-800">
              <MdAttachFile />
              <span>Attach Bills</span>
            </button>
            <p className="text-sm text-gray-500 mt-1">Attach up to 4 images or PDF files</p>
          </div>
        </div>
       </div>
        
        {/* Footer */}
        <div className="p-4 border-t border-gray-200 flex justify-end space-x-3">
          <button className="rounded text-center focus:ring-4 focus:outline-none focus:ring-opacity-50 disabled:opacity-80 disabled:cursor-not-allowed font-semibold gap-2 items-center justify-center inline-flex min-w-[120px] border px-6 h-[48px] text-primary border-gray-200 cursor-pointer">Save</button>
          <button className="rounded text-center focus:ring-4 focus:outline-none focus:ring-opacity-50 disabled:opacity-80 disabled:cursor-not-allowed font-semibold gap-2 items-center justify-center inline-flex min-w-[120px] border px-6 h-[48px] text-white border-primary bg-primary cursor-pointer">Save & Add New</button>
        </div>
      </div>
    </div>
  );
};

export default CashEntryModal