"use client"
import Card from '@/components/Common/Card'
import Text from '@/components/Common/Text'
import BusinessSettingSidebar from '@/components/Screen/Business/BusinessSettingSidebar'
import React, { useState } from 'react'
import { AiOutlineExclamationCircle } from 'react-icons/ai'
import { BiPencil } from 'react-icons/bi'
import { IoIosCamera } from 'react-icons/io'

const Setting = () => {
    const [activeTab, setActiveTab] = useState('Basics');

   const renderTabContent = () => {
    switch (activeTab) {
      case 'Basics':
        return (
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-gray-700">Basics</h4>
            <div className="space-y-4">
              <div className="space-y-1">
                <p className="text-xs text-gray-500">Business Name</p>
                <p className="text-sm font-medium text-gray-900">Easy</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-gray-500">Business Address</p>
                <p className="text-sm font-medium text-gray-900">-</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-gray-500">Staff Size</p>
                <p className="text-sm font-medium text-gray-900">-</p>
              </div>
            </div>
          </div>
        );
      case 'Business Info':
        return (
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-gray-700">Business Info</h4>
            <div className="space-y-4">
              <div className="space-y-1">
                <p className="text-xs text-gray-500">Business Category</p>
                <p className="text-sm font-medium text-gray-900">-</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-gray-500">Business Subcategory</p>
                <p className="text-sm font-medium text-gray-900">-</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-gray-500">Business Type</p>
                <p className="text-sm font-medium text-gray-900">Distributor</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-gray-500">Business Registration Type</p>
                <p className="text-sm font-medium text-gray-900">-</p>
              </div>
            </div>
          </div>
        );
      case 'Communication':
        return (
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-gray-700">Communication</h4>
            <div className="space-y-4">
              <div className="space-y-1">
                <p className="text-xs text-gray-500">Business Mobile Number</p>
                <p className="text-sm font-medium text-gray-900">-</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-gray-500">Business Email</p>
                <p className="text-sm font-medium text-gray-900">faridulislam01012019@gmail.com</p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };
  return (
    <>
    <BusinessSettingSidebar>
       <div className="w-2/5 px-8 pb-8">
        <section className="mt-6 space-y-6">
          <Card className="p-6">
            <div className="flex items-start space-x-4">
              <div className="relative">
                <span className="h-14 w-14 flex items-center justify-center rounded-full bg-indigo-500/20 text-indigo-600 font-bold text-xl">
                  E
                </span>
                <button className="absolute bottom-0 right-0 p-1 bg-gray-100 rounded-full border border-gray-300 shadow">
                  <IoIosCamera className="w-4 h-4 text-gray-600" />
                </button>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-800">Easy</h2>
                  <BiPencil className="w-5 h-5 text-gray-500 cursor-pointer hover:text-indigo-600" />
                </div>
                <div className="flex items-center space-x-1 text-red-500 text-sm font-medium mt-1">
                  <AiOutlineExclamationCircle className="w-4 h-4" />
                  <span>Incomplete business profile</span>
                </div>
                <div className="mt-2 text-sm text-gray-500">
                  <p>Profile Strength: Low</p>
                  <div className="w-full bg-gray-200 rounded-full h-1 mt-1">
                    <div className="bg-indigo-600 h-1 rounded-full" style={{ width: '32.5%' }}></div>
                  </div>
                  <Text text="7 out of 10 fields are incomplete. Fill these to complete your profile" className="mt-1 text-xs text-gray-600"/>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-0">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8 px-6" aria-label="Tabs">
                {['Basics', 'Business Info', 'Communication'].map((tab) => (
                  <button
                    key={tab}
                    className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === tab
                        ? 'border-indigo-500 text-indigo-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </nav>
            </div>
            <div className="p-6">
              {renderTabContent()}
            </div>
          </Card>
        </section>
      </div>
    </BusinessSettingSidebar>
    </>
    
  )
}

export default Setting