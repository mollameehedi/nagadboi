"use client"
import EditRole from '@/components/Screen/Cashbook/AddBook/EditRole';
import EntryField from '@/components/Screen/Cashbook/AddBook/EntryField';
import Member from '@/components/Screen/Cashbook/AddBook/Member';
import React, { useState } from 'react'
import { FaArrowLeft, FaPencilAlt, FaRegFileAlt, FaTrashAlt, FaUserPlus } from 'react-icons/fa';
import { MdContentCopy } from 'react-icons/md';

const AddBook = () => {
     const [activeTab, setActiveTab] = useState('members');

    const renderContent = () => {
        switch (activeTab) {
            case 'members':
                return  <Member/>;
            case 'entry-field':
                return <EntryField/>;
            case 'edit-role':
                return <EditRole/>;
            default:
                return null;
        }
    };
    return (
        <div className="flex-1 bg-white  h-full">
                    <div className=" py-6">
                        {/* Action Bar */}
                        <div className="flex justify-between items-center pb-4 border-b border-gray-200 px-5">
                            <div className="flex items-center space-x-2 text-gray-900">
                                <FaArrowLeft className="w-4 h-4 font-medium  " />
                                <span className="font-medium text-base ">Settings</span>
                                <span className="text-gray-400 text-sm font-light">(Office Expence)</span>
                            </div>
                            <div className="flex space-x-4">
                                <button className="flex items-center space-x-2 px-4 py-2 text-xs  text-primary font-medium hover:bg-gray-50 transition-colors">
                                    <FaPencilAlt className="w-4 h-4" />
                                    <span>Rename Book</span>
                                </button>
                                <button className="flex items-center space-x-2 px-4 py-2 text-xs  text-primary font-medium hover:bg-gray-50 transition-colors">
                                    <MdContentCopy className="w-4 h-4" />
                                    <span>Duplicate Book</span>
                                </button>
                                <button className="flex items-center space-x-2 px-4 py-2 text-xs text-red-500 font-medium hover:bg-red-50 transition-colors">
                                    <FaTrashAlt className="w-4 h-4" />
                                    <span>Delete Book</span>
                                </button>
                            </div>
                        </div>

                        {/* Settings Sub-menu and Content */}
                          <div className="flex">
                            {/* Sub-menu */}
                            <div className="w-56 space-y-2 border-r border-gray-200 px-3">
                                <div className="space-y-1 px-0 py-2">
                                    <div
                                        className={`text-sm p-2 rounded-sm cursor-pointer text-gray-900 font-medium ${activeTab === 'members' ? 'bg-blue-100 ' : ' hover:bg-gray-200'}`}
                                        onClick={() => setActiveTab('members')}
                                    >
                                        <span >Members</span>
                                    <p className="text-xs text-gray-500 mt-1">Add, Change role, Remove</p>
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <div
                                        className={`text-sm p-2 rounded-sm cursor-pointer text-gray-900 font-medium ${activeTab === 'entry-field' ? 'bg-blue-100 ' : ' hover:bg-gray-200'}`}
                                        onClick={() => setActiveTab('entry-field')}
                                    >
                                        <span>Entry Field</span>
                                    <p className="text-xs text-gray-500 mt-1">Contact, Category, Payment</p>
                                    <p className="text-xs text-gray-500">model & Custom Fields</p>
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <div
                                        className={`text-sm p-2 rounded-sm cursor-pointer text-gray-900 font-medium ${activeTab === 'edit-role' ? 'bg-blue-100' : ' hover:bg-gray-200'}`}
                                        onClick={() => setActiveTab('edit-role')}
                                    >
                                        <span>Edit Data Operator Role</span>
                                    <p className="text-xs text-gray-500 mt-1">Make changes in role as per</p>
                                    <p className="text-xs text-gray-500">your need</p>
                                    </div>
                                </div>
                            </div>
                            {/* Content */}
                            <div className="flex-1 p-5 bg-white">
                                <div className='w-2/5'>
{renderContent()}
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
    );
};

export default AddBook