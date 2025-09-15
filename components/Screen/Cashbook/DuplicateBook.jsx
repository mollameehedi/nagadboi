"use client"
import FormInput from '@/components/Common/FormInput'
import Input from '@/components/Common/Input'
import LeftModal from '@/components/Common/LeftModal/LeftModal'
import LeftModalFooter from '@/components/Common/LeftModal/LeftModalFooter'
import LeftModalHeader from '@/components/Common/LeftModal/LeftModalHeader'
import React, { useState } from 'react'
import { IoMdInformationCircle } from 'react-icons/io'

const DuplicateBook = ({isOpen,onClose}) => {
    //  const [newBookName, setNewBookName] = useState(currentBookName ? `${currentBookName} (Copy)` : '');
     const [newBookName, setNewBookName] = useState('Copy');
     const [duplicateOptions, setDuplicateOptions] = useState({
    membersAndRoles: true,
    categories: true,
    paymentModes: true,
    contact: true,
    customFields: true,
  })

   const handleCheckboxChange = (option) => {
    setDuplicateOptions(prev => ({ ...prev, [option]: !prev[option] }));
  };


   const handleSave = () => {
    // onSave(newBookName, duplicateOptions);
    console.log(`Duplicating book: ${newBookName} with options:`, duplicateOptions);
    onClose();
  };

  return (
    <LeftModal isOpen={isOpen}>
        <div>
            <LeftModalHeader title={'Duplicate September Expenses'} onClose={onClose} />
<div className="space-y-4">
          <div className="p-4 bg-blue-100 text-gray-900 text-sm flex">
           <IoMdInformationCircle className="text-primary text-2xl mr-3"/> <span>Create new book with same settings as Business Book</span>
          </div>
          <div className=' px-8'>
            <h4 className="font-normal text-gray-900 text-sm py-4">Step 1: Choose New Book Name</h4>
            
            <FormInput 
              type="text" 
              className="w-[100%] px-4 mt-2 py-2" 
              value={newBookName} 
              onChange={(e) => setNewBookName(e.target.value)} 
              placeholder="Enter new book name"
              label="Enter new book name"
              isRequired={true}
            />
          </div>
          <div className='py-4 px-8'>
            <h4 className="font-normal text-gray-900 text-sm mb-5">Step 2: Choose settings to duplicate</h4>
            <div className="mt-2 space-y-2">
              <div className="flex items-center space-x-2 bg-[#EEEDFA] border border-[#E0E0E0]  px-5 py-3 mb-3   rounded-sm">
                <input 
                  type="checkbox" 
                  checked={duplicateOptions.membersAndRoles} 
                  onChange={() => handleCheckboxChange('membersAndRoles')}
                  className="rounded text-blue-600 focus:ring-blue-500 h-4 w-4"
                />
                <label className="text-gray-900 text-sm font-normal">Members & Roles</label>
              </div>
              <div className="flex items-center space-x-2 bg-[#EEEDFA] border border-[#E0E0E0]  px-5 py-3 mb-3   rounded-sm">
                <input 
                  type="checkbox" 
                  checked={duplicateOptions.categories} 
                  onChange={() => handleCheckboxChange('categories')}
                  className="rounded text-blue-600 focus:ring-blue-500 h-4 w-4"
                />
                <label className="text-gray-900 text-sm font-normal">Categories</label>
              </div>
              <div className="flex items-center space-x-2 bg-[#EEEDFA] border border-[#E0E0E0]  px-5 py-3 mb-3   rounded-sm">
                <input 
                  type="checkbox" 
                  checked={duplicateOptions.paymentModes} 
                  onChange={() => handleCheckboxChange('paymentModes')}
                  className="rounded text-blue-600 focus:ring-blue-500 h-4 w-4"
                />
                <label className="text-gray-900 text-sm font-normal">Payment Modes</label>
              </div>
              <div className="flex items-center space-x-3 bg-[#EEEDFA] border border-[#E0E0E0]  px-5 py-3 mb-3   rounded-sm">
                <input 
                  type="checkbox" 
                  checked={duplicateOptions.contact} 
                  onChange={() => handleCheckboxChange('contact')}
                  className="rounded text-blue-600 focus:ring-blue-500 h-4 w-4"
                />
                <label className="text-gray-900 text-sm font-normal">Contact</label>
              </div>
              <div className="flex items-center space-x-2 bg-[#EEEDFA] border border-[#E0E0E0]  px-5 py-3 mb-3  rounded-sm">
                <input 
                  type="checkbox" 
                  checked={duplicateOptions.customFields} 
                  onChange={() => handleCheckboxChange('customFields')}
                  className="rounded text-blue-600 focus:ring-blue-500 h-4 w-4"
                />
                <label className="text-gray-900 text-sm font-normal">Custom Fields</label>
              </div>
            </div>
          </div>
        </div>
        </div>
        <LeftModalFooter btn_text2="Add New Book" btn_txt1="Cancel"/>
    </LeftModal>
  )
}

export default DuplicateBook