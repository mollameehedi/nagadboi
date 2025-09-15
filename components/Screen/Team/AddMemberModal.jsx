"use client"
import Card from '@/components/Common/Card';
import RightModal from '@/components/Common/RightModal/RightModal';
import RightModalFooter from '@/components/Common/RightModal/RightModalFooter';
import RightModalHeader from '@/components/Common/RightModal/RightModalHeader';
import React, { useState } from 'react'
import { FaCircleCheck } from 'react-icons/fa6';
import { IoIosArrowRoundBack, IoMdClose, IoMdCloseCircle } from 'react-icons/io';
import { IoArrowBackOutline } from 'react-icons/io5';
import { LuInfo } from 'react-icons/lu';

const AddMemberModal = ({ isOpen, onClose }) => {
  const [mobileNumber, setMobileNumber] = useState('');
   const [view, setView] = useState('addEmail'); // 'addEmail', 'addMobile', 'chooseRole'
  const [memberInfo, setMemberInfo] = useState({ type: 'Mehedi', value: '01258653578' });
  const [activeRoleTab, setActiveRoleTab] = useState('Staff');

  if (!isOpen) return null;
  const handleNextClick = () => {
    // In a real app, you'd validate the input before setting the view
    setView('chooseRole');
  }

  const rolePermissions = {
  Owner: {
    permissions: [
      { text: 'Full access to all books of this business'},
      { text: 'Full access to business settings'},
      { text: 'Add/remove members in business'},
    ],
    restrictions: [
      { text: "Can't delete business" },
      { text: "Can't remove owner from business" },
    ],
  },
  Partner: {
    permissions: [
      { text: 'Full access to all books of this business'},
      { text: 'Full access to business settings'},
    ],
    restrictions: [
      { text: "Can't add/remove members in business" },
      { text: "Can't delete business" },
      { text: "Can't remove owner from business" },
    ],
  },
  Staff: {
    permissions: [
      { text: 'Limited access to selected books'},
      { text: 'Owner/Partner can assign Admin, Viewer or Operator role to staff in any book'},
    ],
    restrictions: [
      { text: 'No access to books they are not part of' },
      { text: 'No access to business settings' },
      { text: 'No option to delete books' },
      { text: "Can't view employee details" },
    ],
  },
};

   const renderContent = () => {
    if (view === 'addEmail') {
      return (
        <>
         <div>
          <RightModalHeader title='Add team member' onClose={onClose}/>
       <div className="mb-4 flex-1 overflow-y-auto p-4 md:p-6">
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
          <div className="p-4 border-t border-gray-200 flex justify-end space-x-3">
             <button onClick={() => setView('addMobile')} className="rounded text-center  font-normal gap-2 items-center justify-center inline-flex min-w-[120px] border px-6 h-[48px] text-primary border-gray-200 cursor-pointer">Add With Mobile Number</button>
             <button className="rounded text-center focus:ring-4 focus:outline-none focus:ring-opacity-50 disabled:opacity-80 disabled:cursor-not-allowed font-semibold gap-2 items-center justify-center inline-flex min-w-[120px] border px-6 h-[48px] text-white border-primary bg-primary cursor-pointer">Next</button>
           </div>
        </>
      );
    } else if (view === 'addMobile') {
      return (
        <>
        <div>
           <RightModalHeader title='Add team member' onClose={onClose}/>
          <div className="mb-4 flex-1 overflow-y-auto p-4 md:p-6 w-full">
            <label className="block text-gray-700 font-medium mb-3 text-sm">Add Number</label>
            <select className="p-3   focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>🇮🇳</option>
              <option>🇧🇩</option>
            </select>
            <input
              type="text"
              placeholder="e.g. 8772321230"
              className="flex-1 p-2 border rounded-sm border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={memberInfo.value}
              onChange={(e) => setMemberInfo({ type: 'mobile', value: e.target.value })}
            />
          </div>
          <div className="flex justify-center my-4">
            <span className="text-sm text-gray-500">Or</span>
          </div>
          <div className='text-center'>
            <button
              onClick={() => setView('addEmail')}
              className="text-primary border border-gray-200 px-6 py-2 rounded-sm font-medium hover:text-primary/90"
            >
              Add Email
            </button>
          </div>
        </div>
          
         <RightModalFooter btn_text2='Next' handleButton2={handleNextClick}/>
        </>
      );
    } else if (view === 'chooseRole') {
      return (
        <>
          <div>
            <div className="flex items-center justify-between space-x-2 border border-gray-200 px-8 py-4">
           <div className='flex'>
             <button onClick={() => setView('addEmail')} className="text-gray-500 hover:text-gray-800">
              <IoArrowBackOutline className='text-2xl text-gray-700 mr-3'/>
            </button>
            <h3 className="text-xl font-medium text-gray-900">Choose Role & Invite</h3>
           </div>
            <button onClick={onClose} className='p-2 cursor-pointer border border-gray-200'>
                       <IoMdClose className='text-2xl text-gray-700'/>
                     </button>
          </div>
          <div className="px-8 py-4 rounded-lg mb-4">
            <p className="font-normal text-gray-700 text-base">
              {memberInfo.value} is a new user. Send invite to {memberInfo.value} to join this business
            </p>
          </div>
          <Card className="flex items-center space-x-4 mb-6 mx-8 ">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-200 text-blue-800 font-bold">
              {memberInfo.value.charAt(0).toUpperCase()}
            </div>
            <div className="flex justify-between w-100 items-center">
             <div>
              <div>
                <h4 className="font-semibold text-gray-900">Mehedi</h4>
                <p className='text-gray-400 text-sm'>1774378409</p>
              </div>
             </div>
              <p > <span className="text-sm bg-gray-200 px-2 rounded-sm text-gray-500">Not a CashBook User</span></p>
            </div>
          </Card>
          <Card className="space-y-4 my-5 mx-8 px-0">
            <h4 className="font-medium text-gray-900 text-lg border-b-1 border-gray-200 px-8 pb-3">Choose Role</h4>
          <div className='px-8'>
              <div className="flex space-x-4">
              {['Staff', 'Partner'].map(role => (
                <button
                  key={role}
                  className={`px-6 py-1 rounded-full text-base border font-medium transition-colors duration-200 ${
                    activeRoleTab === role
                      ? 'bg-primary/10 text-primary border-primary/50'
                      : 'bg-gray-200 border-gray-100 text-gray-500 hover:bg-gray-300'
                  }`}
                  onClick={() => setActiveRoleTab(role)}
                >
                  {role}
                </button>
              ))}
            </div>
            <h5 className="font-medium text-gray-600 mt-5">Permissions</h5>
            <ul className="space-y-2 text-sm text-gray-600">
              {rolePermissions[activeRoleTab].permissions.map((item, index) => (
                <li key={index} className="flex items-center space-x-3 leading-7 text-sm text-gray-700">
                 <FaCircleCheck className='text-green-500 text-lg'  />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
            <h5 className="font-medium text-gray-600  mt-2">Restrictions</h5>
            <ul className="space-y-2 text-sm text-gray-600">
              {rolePermissions[activeRoleTab].restrictions.map((item, index) => (
                <li key={index} className="flex items-center space-x-3 leading-7 text-sm text-gray-700">
                 <IoMdCloseCircle className='text-red-500 text-lg'  />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
          </Card>
           <div className="flex items-center space-x-2 mx-8 text-sm text-gray-500">
              <LuInfo className="text-xl text-gray-500"/>
              <span>You can change this role later</span>
            </div>
          </div>
          <RightModalFooter btn_text1={`Change ${memberInfo.type === 'email' ? 'Email' : 'Mobile'}`} btn_text2={`Invite as ${activeRoleTab}`} handleButton2={handleNextClick}/>
        </>
      );
    }
  };




  return (
    <RightModal isOpen={isOpen}> 
{renderContent()}
    </RightModal>
  );
  // return (
  //   <div className={`fixed inset-0 bg-gray-600/40 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
  //     <div className={`fixed top-0 flex justify-between flex-col right-0 h-full w-full max-w-xl bg-white shadow-lg transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
  //      <div>
  //        {/* Header */}
  //       <div className="flex justify-between items-center p-4 border-b border-gray-200">
  //         <h3 className="text-xl font-medium text-gray-900">Add team member</h3>
  //         <button onClick={onClose} className='p-2 cursor-pointer'>
  //           <IoMdClose />
  //         </button>
  //       </div>

  //       {/* Body */}
  //       <div className="flex-1 overflow-y-auto p-4 md:p-6">
          
  //        {renderContent()}
  //       </div>
  //      </div>
        
  //       {/* Footer */}
  //       <div className="p-4 border-t border-gray-200 flex justify-end space-x-3">
  //         <button onClick={() => setView('addMobile')} className="rounded text-center  font-normal gap-2 items-center justify-center inline-flex min-w-[120px] border px-6 h-[48px] text-primary border-gray-200 cursor-pointer">Add With Mobile Number</button>
  //         <button className="rounded text-center focus:ring-4 focus:outline-none focus:ring-opacity-50 disabled:opacity-80 disabled:cursor-not-allowed font-semibold gap-2 items-center justify-center inline-flex min-w-[120px] border px-6 h-[48px] text-white border-primary bg-primary cursor-pointer">Next</button>
  //       </div>
  //     </div>
  //   </div>
  // );
};


export default AddMemberModal