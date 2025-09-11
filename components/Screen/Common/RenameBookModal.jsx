"use client"
import React, { useEffect, useState } from 'react'
import { IoMdClose } from 'react-icons/io';

const RenameBookModal = ({ isOpen, onClose, currentName, onSave }) => {
  const [bookName, setBookName] = useState(currentName);
   useEffect(() => {
    setBookName(currentName);
  }, [currentName]);

  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600/40 overflow-y-auto h-full w-full flex items-center justify-center z-50">
      <div className="relative p-8 bg-white w-full max-w-lg mx-auto rounded-sm shadow-lg">
        <div className="flex justify-between items-center pb-3">
          <h3 className="text-xl font-medium text-gray-900">Rename Book</h3>
          <button onClick={onClose} className='border border-gray-200 rounded-sm p-2 cursor-pointer'>
            <IoMdClose />
          </button>
        </div>
        <div className="mt-2 space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Book Name</label>
            <input 
              type="text" 
              className="w-full px-4 py-2 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
              value={bookName} 
              onChange={(e) => setBookName(e.target.value)} 
            />
          </div>
        </div>
        <div className="flex justify-end space-x-3 mt-6">
          <button onClick={onClose} className="px-6 py-2 text-gray-600 rounded-lg hover:bg-gray-200">Cancel</button>
          <button onClick={() => onSave(bookName)} className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Save</button>
        </div>
      </div>
    </div>
  );
};

export default RenameBookModal