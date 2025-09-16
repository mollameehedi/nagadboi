import Card from '@/components/Common/Card';
import RightModal from '@/components/Common/RightModal/RightModal'
import RightModalHeader from '@/components/Common/RightModal/RightModalHeader'
import React from 'react'
import { FaPlus } from 'react-icons/fa';
import { FiPlus } from 'react-icons/fi';
import { GoPlus } from 'react-icons/go';

const EntryDetails = ({ isOpen, onClose, data }) => {

    const entryData = {
        type: 'Cash In',
        amount: 400,
        date: '16 Sep 2025, 03:33 PM',
        contactName: 'Ten',
        contactType: 'customer',
        remark: 'test',
        tags: ['Sale', 'Cash'],
        activity: {
            user: 'You',
            timestamp: 'On 16 Sep 2025, 03:34 PM',
        },
    };


    return (

        <RightModal isOpen={isOpen} onClose={onClose}>
            <div>

                <RightModalHeader title="Entry Details" onClose={onClose} />
                <div className="p-6">
                    {/* Amount and Date Section */}
                   <Card className="rounded-sm">
                     <div className="mb-6 flex items-start justify-between border-b-1 border-gray-200 pb-5">
                        <div className=''>
                            <div className="mb-1 text-sm font-medium text-green-700 flex items-center"><FiPlus className='mr-2 text-xl font-normal'/> <span>{entryData.type}</span></div>
                            <div className="text-2xl font-medium text-green-700">{entryData.amount}</div>
                        </div>
                        <div className="flex items-center space-x-2 text-right">
                            <span className="text-sm text-gray-500">{entryData.date}</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-green-500"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                    </div>

                    {/* Details Section */}
                    <div className="space-y-4">
                        <div>
                            <h3 className="mb-1 text-sm font-normal text-gray-500">Contact Name</h3>
                            <p className="font-normal text-gray-700">
                                {entryData.contactName}
                                <span className="ml-2 text-sm font-normal text-gray-500">({entryData.contactType})</span>
                            </p>
                        </div>
                        <div>
                            <h3 className="mb-1 font-normal text-sm text-gray-700">Remark</h3>
                            <p className="font-normal font-normal text-gray-600">{entryData.remark}</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {entryData.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="rounded-sm border border-gray-300 bg-primary/15 px-3 py-1 text-xs font-medium text-primary"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                   </Card>

                    {/* Activities Section */}
                    <div className="space-y-3">
                        <h3 className="text-sm font-semibold text-gray-700 mt-3">Activites</h3>
                        <div className="flex border-l-2  pl-6 relative items-center space-x-3 border-b-1 border-gray-200 p-4">
                            <div className="h-7 w-7  text-gray-600 absolute p-2 -left-3 top-2 flex items-center justify-center rounded-full bg-gray-200">
                                <GoPlus className='text-xl'/>
                            </div>
                            <div>
                                <p className="font-medium text-gray-800">Created by {entryData.activity.user}</p>
                                <p className="text-xs text-gray-500">{entryData.activity.timestamp}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="p-4 border-t border-gray-200 flex justify-end space-x-3">
                <button className="rounded text-center focus:ring-4 focus:outline-none focus:ring-opacity-50 disabled:opacity-80 disabled:cursor-not-allowed font-semibold gap-2 items-center justify-center inline-flex min-w-[120px] border px-6 h-[48px] text-primary border-gray-200 cursor-pointer">Delete</button>

                <button className="rounded text-center focus:ring-4 focus:outline-none focus:ring-opacity-50 disabled:opacity-80 disabled:cursor-not-allowed font-semibold gap-2 items-center justify-center inline-flex min-w-[120px] border px-6 h-[48px] text-white border-primary bg-primary cursor-pointer">Save</button>
            </div>
        </RightModal>
    )
}

export default EntryDetails