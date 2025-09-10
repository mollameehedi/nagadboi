"use client"
import Icons from '@/app/assets/Icon';
import SingleHeader from '@/components/layout/SingleHeader';
import React, { useState } from 'react'
import { FaRegEdit } from 'react-icons/fa';
import { MdLogout } from 'react-icons/md';
import { RiAppleLine } from 'react-icons/ri';
import dashboardImage from '@/public/dashboard.png'
import Image from 'next/image';
import Card from '@/components/Common/Card';

const Profile = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  return (
    <>
    <SingleHeader/>
    <div className="flex-1 p-8 w-3/11 mx-auto">
      <div className="">
        <Card className="p-5">
          <div className="flex items-center space-x-4 mb-6">
          <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center text-3xl font-bold text-gray-700">
            M
          </div>
          <div>
            <div className="text-xl text-gray-900 font-bold">MD. Hazzaz Bin Faiz</div>
            <div className="text-sm text-gray-500">+8801774378409</div>
          </div>
        </div>

        <div className="p-4 bg-green-50 rounded-lg border border-green-200 mb-6">
          <div className="flex items-center mb-2">
            <Icons.EmailPlush  className="w-[35px] h-[35px] mr-3"/>
            <span className="font-semibold text-green-800">Add Email ID to Profile</span>
          </div>
          <p className="text-sm text-green-700">Login via verified email on mobile app & desktop</p>
          <p className="text-sm text-green-700">Get monthly summary on email (Coming Soon)</p>
          <button className="mt-4 px-4 py-2 text-sm font-semibold text-green-800 bg-green-200 rounded-lg hover:bg-green-300">
            + Add Email
          </button>
        </div>

        <div className="flex space-x-4 mb-6 border-b-1 border-gray-200 pb-5">
          <button className="flex items-center px-5 py-2 border-1 border-gray-200 text-primary rounded-sm text-sm hover:bg-gray-200">
            <FaRegEdit className='mr-2' />
            Edit Profile
          </button>
          <button className="flex items-center px-5 py-2  text-red-700 rounded-sm text-sm hover:bg-gray-200">
            <MdLogout />
            Logout
          </button>
        </div>

        <h3 className="text-xs font-bold text-gray-400 mb-4">Preferences</h3>
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="font-medium text-base">Notifications</div>
            <div className="text-sm text-gray-500">Get notified for entries from group books</div>
          </div>
          <div
            onClick={() => setNotificationsEnabled(!notificationsEnabled)}
            className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors ${notificationsEnabled ? 'bg-blue-600' : 'bg-gray-300'}`}
          >
            <div
              className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${notificationsEnabled ? 'translate-x-6' : ''}`}
            ></div>
          </div>
        </div>
        </Card>
        <p className="text-sm text-gray-400 text-right">Since 09 Nov, 2021</p>
      </div>
      <div className="mt-6 flex flex-col md:flex-row items-center justify-between">
       
          <Image src={dashboardImage} height={100} width={600} alt="Mobile App Preview" className="w-full h-auto rounded-sm border-3 border-primary" />
       
      </div>
    </div>
    </>
  );
};

export default Profile