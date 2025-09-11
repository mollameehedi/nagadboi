"use client"
import React, { useState } from 'react'
import Card from '@/components/Common/Card'
import TeamItem from '@/components/Screen/Team/TeamItem'
import { BsPersonCheck, BsWhatsapp } from 'react-icons/bs'
import { MdKeyboardArrowRight, MdOutlineBusinessCenter } from 'react-icons/md'

const Team = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeTab, setActiveTab] = useState('All');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const handleAddTeamMember = () => {
        // Logic for adding a team member
        console.log("Add team member clicked.");
    };

    const teamMembers = [
        {
            initials: 'M',
            name: 'You',
            contact: '+8801774378409',
            role: 'Partner',
            color: 'bg-green-500/20 text-green-600',
        },
        {
            initials: 'F',
            name: 'faridul islam',
            contact: 'faridulislam01012019@gmail.com',
            role: 'Owner',
            color: 'bg-red-500/20 text-red-600',
        },
    ];
    return (

        <div className="bg-gray-50 min-h-screen font-sans antialiased flex flex-col">
            <div className="flex-1 overflow-y-auto p-8">
                <div className="grid grid-cols-12 gap-8">
                    {/* Left Column - Team Members List */}
                    <div className="col-span-9 ">
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                            <div className="flex-1 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                <h2 className="text-lg font-semibold text-gray-800">Total Members ({teamMembers.length})</h2>
                            </div>
                            <a href="#" className="flex items-center text-blue-600 font-semibold hover:text-blue-700 whitespace-nowrap">
                                View roles & permissions
                                <MdKeyboardArrowRight className="w-4 h-4 ml-1" />
                            </a>
                        </div>
                        <div className="relative w-2/5">
                            <input
                                type="text"
                                placeholder="Search by name, number..."
                                value={searchTerm}
                                onChange={handleSearchChange}
                                className="w-full pl-4 pr-4 py-2 bg-white text-gray-400 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                            <svg className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>

                        {/* Tabs */}
                        <div className="border-b border-gray-200 mt-5">
                            <nav className="-mb-px flex" aria-label="Tabs">
                                {['All', 'Pending Invites', 'Owner/Partner', 'Staff'].map((tab) => (
                                    <button
                                        key={tab}
                                        className={`whitespace-nowrap py-4 px-3 border-b-2 font-medium text-sm transition-colors ${activeTab === tab
                                                ? 'text-primary bg-primary/20'
                                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                            }`}
                                        onClick={() => handleTabChange(tab)}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </nav>
                        </div>

                        {/* Member List */}
                        <div className="space-y-4 bg-white border border-gray-200 p-4">
                            <h3 className="text-sm font-medium text-gray-500">Owner/Partner ({teamMembers.length})</h3>
                            {teamMembers.map((member,index) => (
                                <TeamItem name={member.name} color={member.color} initials={member.initials} role={member.role} contact={member.contact} key={index}/>
                            ))}
                        </div>

                    </div>
                  <div className=" col-span-3">
                    <Card className="space-y-4">
                        <h3 className="text-xs font-normal text-gray-400">Add your business partners or staffs to this business and manage cashflow together</h3>
                        <button
                            className="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center"
                            onClick={handleAddTeamMember}
                        >
                            <BsPersonCheck className="w-5 h-5 mr-1" />
                            Add team member
                        </button>
                    </Card>
                </div>
                </div>
                {/* Right Sidebar */}
            </div>
        </div>

    )
}

export default Team