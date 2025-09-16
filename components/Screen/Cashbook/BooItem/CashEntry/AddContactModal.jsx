import CenterModal from '@/components/Common/CenterModal/CenterModal';
import React, { useState } from 'react'
import { FiChevronRight, FiFilePlus } from 'react-icons/fi';
import { IoChevronDownCircleOutline } from 'react-icons/io5';
import { TbFlagBitcoin, TbFlagDiscount } from 'react-icons/tb';
import excelIcon from '@/public/excel.png'
import Image from 'next/image';
import Link from 'next/link';
import RightModalFooter from '@/components/Common/RightModal/RightModalFooter';
import FormInput from '@/components/Common/FormInput';
import PhoneNumberInput from '@/components/Common/PhoneNumberInput';

const AddContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const [contactType, setContactType] = useState('customer');
  const [mobileNumber, setMobileNumber] = useState('');

  const handleContactChange = (event) => {
    setContactType(event.target.value);
  };

  const contactTypes = [
    { value: 'customer', label: 'Customer' },
    { value: 'supplier', label: 'Supplier' },
  ];

  const handleSave = () => {
      // Here you would handle saving the contact
      // For this example, we'll just log the data and close the modal
      console.log('New Contact Data:', {
          contactName,
          mobileNumber,
          contactType
      });
      alert('Contact saved! Check the console for data.');
      onClose();
  };



  return (
   <CenterModal title='Add New Contact' className="pb-3 pt-0 mt-0" isOpen={isOpen} onClose={onClose}>
<div>
   {/* Bulk Import Button */}
        <div className="font-semibold py-4 px-5 rounded-lg flex items-center justify-between mb-6 text-green-700 bg-green-50">
          <Link href="/dashboard/cashbooks/bulk" className="flex items-center ">
            <Image src={excelIcon} alt='excel icon' height="20" width="20" className="mr-2"/>
            <span className="text-base font-medium ">Import all contacts in bulk via CSV</span>
          </Link>
         <FiChevronRight className='text-xl'/>
        </div>

        <div className="space-y-4 px-6">
          {/* <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">Contact Name <span className="text-red-500">*</span></label>
            <input 
              type="text"
              className="w-full px-4 py-2 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
              placeholder="e.g. Rajesh, Vivek, Saif, John" 
            />
          </div> */}

           <FormInput
              type="text" 
              className="w-[100%] px-4 mt-2 py-2" 
              // value={newBookName} 
              // onChange={(e) => setNewBookName(e.target.value)} 
              placeholder="Contact Name"
              label="Enter new contact name"
              isRequired={true}
            />


        <PhoneNumberInput
            label="Mobile Number"
            value={mobileNumber}
            onChange={setMobileNumber}
            placeholder="e.g. 8772321230"
          />
           <div>
          <label htmlFor="contact-type" className="block text-sm font-medium text-gray-700 mb-2">Contact Type</label>
          <div className="flex space-x-4 w-3/6">
            {contactTypes.map((type) => (
              <label
                key={type.value}
                htmlFor={`contact-${type.value}`}
                className={`
                  flex items-center justify-center flex-1 px-4 py-2
                  rounded-full transition-all duration-200 ease-in-out
                  border-1 cursor-pointer text-sm font-medium
                  ${contactType === type.value
                    ? 'bg-blue-50 border-primary/80 text-primary shadow'
                    : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-100'
                  }
                `}
              >
                <input
                  type="radio"
                  id={`contact-${type.value}`}
                  name="contactType"
                  value={type.value}
                  checked={contactType === type.value}
                  onChange={handleContactChange}
                  className="hidden"
                />
                <span className="whitespace-nowrap">{type.label}</span>
              </label>
            ))}
          </div>
        </div>
        </div>
</div>
<RightModalFooter btn_text2="save"/>
   </CenterModal>
  );
};

export default AddContactModal