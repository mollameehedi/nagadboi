"use client"
import Card from '@/components/Common/Card';
import CashbookAccessItem from '@/components/Screen/Team/CashbookAccessItem';
import PermissionItem from '@/components/Screen/Team/PermissionItem';
import React, { useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa';
import Icon from '../../../assets/Icon';

const MemberDetails = () => {
     const [showPermissions, setShowPermissions] = useState(false);
  const [showAllCashbooks, setShowAllCashbooks] = useState(false);

  const owner = {
    name: 'faridul islam',
    number: '01800000000',
    memberSince: '11 Aug 2025'
  };


  const permissions = [
    'Full access to all books of this business',
    'Full access to business settings',
    'Add/remove members in business'
  ];

  const restrictions = [
    'Can\'t delete business',
    'Can\'t remove owner from business'
  ];

  const cashbooks = [
    { name: 'Shafi SketchBook', access: 'Full Access' },
    { name: 'Office Expence', access: 'Full Access' },
    { name: 'Business Book', access: 'Full Access' },
    { name: 'Personal Cashbook', access: 'Full Access' },
    { name: 'Client Project', access: 'Full Access' },
  ];

  const visibleCashbooks = showAllCashbooks ? cashbooks : cashbooks.slice(0, 3);



      return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-800 p-8">
        <p className='text-xs text-gray-400'>Business Team | Owner Info</p>
      <div className="flex items-center gap-4 py-4 ">
        <button onClick={() => window.history.back()} className="p-2 rounded-full hover:bg-gray-200">
          <FaArrowLeft />
        </button>
        <h2 className="text-lg font-medium">Owner Info</h2>
      </div>

      <div className="max-w-3xl w-full space-y-6">
        {/* Owner Info Card */}
        <Card>
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-1/9 h-12 flex items-center justify-center ">
              <span className=' h-[60px] w-[60px] rounded-full text-center leading-[60px] bg-indigo-100 text-lg font-bold text-primary'>
                {owner.name.charAt(0).toUpperCase()}
                </span>
            </div>
            <div className='w-7/9'>
              <div className="flex items-center space-x-2 justify-between">
                <h3 className="text-lg font-medium">{owner.name}</h3>
                <span className="text-xs font-semibold px-2 py-1 rounded-sm bg-green-100 text-green-700">Owner</span>
              </div>
              <p className="text-sm text-gray-500">{owner.number}</p>
              <p className="text-sm text-gray-500">Member since {owner.memberSince}</p>
            </div>
          </div>
        </Card>

        {/* Owner Permissions Section */}
        <Card>
          <button
            className="flex items-center justify-center w-full text-sm font-semibold text-center text-gray-500"
            onClick={() => setShowPermissions(!showPermissions)}
          >
            Owner Permissions
            <Icon.ChevronDownIcon isOpen={showPermissions}  className='text-lg ml-2'/>
          </button>
           {showPermissions && (
            <div className="p-4 border-t border-gray-200 mt-3">
              <h4 className="font-semibold text-gray-500 mb-2">Permissions</h4>
              <div className="space-y-2 mb-4">
                {permissions.map((p, index) => (
                  <PermissionItem key={`perm-${index}`} text={p} />
                ))}
              </div>
              <h4 className="font-semibold text-gray-500 mb-2">Restrictions</h4>
              <div className="space-y-2">
                {restrictions.map((r, index) => (
                  <PermissionItem key={`restr-${index}`} text={r} isRestriction={true} />
                ))}
              </div>
            </div>
          )}
        </Card>

        {/* Cashbook Access List */}
        <Card>
          <div className="space-y-2">
            {visibleCashbooks.map((book, index) => (
              <CashbookAccessItem key={index} name={book.name} access={book.access} />
            ))}
          </div>
          {cashbooks.length > 3 && (
            <button
              className="w-full text-center py-2 mt-4 text-blue-600 font-medium flex justify-center"
              onClick={() => setShowAllCashbooks(!showAllCashbooks)}
            >
              {showAllCashbooks ? 'Show Less' : 'Show More'}
              <Icon.ChevronDownIcon isOpen={showAllCashbooks} />
            </button>
          )}
        </Card>
      </div>
    </div>
  );
}

export default MemberDetails