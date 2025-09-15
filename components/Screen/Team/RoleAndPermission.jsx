import Card from '@/components/Common/Card'
import RightModal from '@/components/Common/RightModal/RightModal'
import RightModalFooter from '@/components/Common/RightModal/RightModalFooter'
import RightModalHeader from '@/components/Common/RightModal/RightModalHeader'
import React, { useState } from 'react'
import { FaCircleCheck } from 'react-icons/fa6'
import { IoMdCloseCircle } from 'react-icons/io'

const RoleAndPermission = ({isOpen,onClose}) => {
     const [activeTab, setActiveTab] = useState('Owner');

    const rolePermissions = {
  Owner: {
    permissions: [
      { text: 'Full access to all books of this business'},
      { text: 'Full access to business settings'},
      { text: 'Add/remove members in business'},
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
      { text: 'View/edit books you are added to'},
      { text: 'View/edit entries in those books'},
    ],
    restrictions: [
      { text: 'Limited access to settings' },
      { text: 'Can only edit books added by owner/partner' },
    ],
  },
};

  return (
    <RightModal isOpen={isOpen}>
      <div>
          <RightModalHeader title='Business Roles & Permissions' onClose={onClose}/>
        <Card className="my-5 mx-8">
          <div className="flex space-x-4 mb-4 mt-3">
            {['Owner', 'Partner', 'Staff'].map(role => (
              <button
                key={role}
                className={`px-6 py-1 rounded-full text-base border font-medium transition-colors duration-200 ${
                  activeTab === role
                    ? 'bg-primary/10 text-primary border-primary/50 shadow-md'
                    : 'bg-gray-200 border-gray-100 text-gray-500 hover:bg-gray-300'
                }`}
                onClick={() => setActiveTab(role)}
              >
                {role}
              </button>
            ))}
          </div>
          <div className="space-y-4">
            <h4 className="font-medium text-gray-700">Permissions</h4>
            <div className="rounded-lg">
              <ul className="space-y-2">
                {rolePermissions[activeTab].permissions.map((item, index) => (
                  <li key={index} className="flex items-center space-x-3 leading-7 text-sm text-gray-700">
                    <FaCircleCheck className='text-green-500 text-lg'  />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            {rolePermissions[activeTab].restrictions &&  (
                <>
                 <h4 className="font-medium text-gray-600  mt-2">Restrictions</h4>
            <div className="rounded-lg">
              <ul className="space-y-2">
                {rolePermissions[activeTab].restrictions.map((item, index) => (
                  <li key={index} className="flex items-center space-x-3 text-sm text-gray-700">
                    <IoMdCloseCircle className='text-red-500 text-lg'/>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div></>)}
           
          </div>
        </Card>
      </div>
        <RightModalFooter btn_text2="Ok, Got It"/>
    </RightModal>
  )
}

export default RoleAndPermission