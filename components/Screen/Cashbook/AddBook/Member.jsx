import Card from '@/components/Common/Card'
import React from 'react'
import { FaUserPlus } from 'react-icons/fa'
import { TbUsersPlus } from 'react-icons/tb'

const Member = () => {
  return (
    <>
                        <Card className="flex justify-between items-center p-5">
                            <div className="space-y-2 pr-5">
                                <h3 className="text-lg font-medium text-gray-900">Add Members</h3>
                                <p className="text-sm text-gray-500 font-normal">
                                    Manage your cashflow together with your business partners, family or friends by adding them as members.
                                </p>
                            </div>
                            <button className="flex-shrink-0 flex items-center space-x-2 px-8 py-2 rounded-sm bg-primary text-white font-semibold shadow-sm hover:bg-blue-700 transition-colors">
                                <TbUsersPlus className="w-4 h-4" />
                                <span>Add member</span>
                            </button>
                        </Card>
                        <div className="mt-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-semibold text-gray-900">Total Members (2)</h3>
                                <a href="#" className="flex items-center text-blue-500 text-sm font-medium hover:underline">
                                    <span>View roles & permissions</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>
                            <h4 className='text-sm text-gray-500 font-semibold py-2'>Members in this book</h4>
                            <div className="space-y-4">
                                {/* Member 1 */}
                                <div className="flex items-center justify-between p-4 bg-white border-b-1 border-gray-200">
                                    <div className="flex items-center space-x-4">
                                        <div className="bg-green-500/10 text-green-700  font-bold w-15 h-15 rounded-full flex items-center justify-center">
                                            M
                                        </div>
                                        <div>
                                            <div className="font-semibold text-gray-800">You</div>
                                            <div className="text-sm text-gray-500">+8801774378409</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <span className="px-3 py-1 text-xs font-medium text-orange-600 bg-orange-100 rounded-full">Partner</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                                {/* Member 2 */}
                                <div className="flex items-center justify-between p-4 bg-white border-b-1 border-gray-200">
                                    <div className="flex items-center space-x-4">
                                        <div className="bg-red-500/10 text-red-700 font-bold w-15 h-15 rounded-full flex items-center justify-center">
                                            F
                                        </div>
                                        <div>
                                            <div className="font-semibold text-gray-800">faridul islam</div>
                                            <div className="text-sm text-gray-500">faridulislam01012019@gmail.com</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <span className="px-3 py-1 text-xs font-medium text-green-600 bg-green-100 rounded-full">Owner</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
  )
}

export default Member