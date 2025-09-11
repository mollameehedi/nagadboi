import Card from '@/components/Common/Card'
import React from 'react'

const EntryField = () => {
  return (
    <div className="space-y-4">
                        {/* Contact field */}
                        <Card className="flex items-center justify-between">
                            <div>
                                <div className="font-semibold text-lg text-gray-800">Contact field</div>
                                <div className="text-sm text-gray-500">Rename, delete, reorder, add new or hide</div>
                            </div>
                            <span className="px-3 leading-7 bg-primary/10 text-primary text-xs font-semibold rounded-sm uppercase ">
                              on
                            </span>
                        </Card>

                        {/* Category field */}
                        <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border border-gray-200">
                            <div>
                                <div className="flex items-center space-x-2">
                                    <span className="font-semibold text-lg text-gray-800">Category field</span>
                                    <span className="px-2 py-0.5 text-xs font-medium text-green-700 bg-green-100 rounded-full">New</span>
                                </div>
                                <div className="text-sm text-gray-500">Rename, delete, reorder, add new or hide</div>
                            </div>
                             <span className="px-3 leading-7 bg-primary/10 text-primary text-xs font-semibold rounded-sm uppercase ">
                              on
                            </span>
                        </div>

                        {/* Payment Mode field */}
                        <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border border-gray-200">
                            <div>
                                <div className="flex items-center space-x-2">
                                    <span className="font-semibold text-lg text-gray-800">Payment Mode field</span>
                                    <span className="px-2 py-0.5 text-xs font-medium text-green-700 bg-green-100 rounded-full">New</span>
                                </div>
                                <div className="text-sm text-gray-500">Rename, delete, reorder, add new or hide</div>
                            </div>
                            <span className="px-3 leading-7 bg-primary/10 text-primary text-xs font-semibold rounded-sm uppercase ">
                              on
                            </span>
                        </div>

                        {/* Custom fields */}
                        <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-200">
                            <div className="flex items-center space-x-2 mb-2">
                                <span className="font-semibold text-lg text-gray-800">Custom fields</span>
                                <span className="px-2 py-0.5 text-xs font-medium text-green-700 bg-green-100 rounded-full">New</span>
                            </div>
                            <div className="text-sm text-gray-500">Edit, delete and add new</div>
                        </div>
                    </div>
  )
}

export default EntryField