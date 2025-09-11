import React from 'react'
import { FaCloudUploadAlt} from 'react-icons/fa'
import { IoMdCalendar } from 'react-icons/io'
import {  LuEyeOff } from 'react-icons/lu'
import { MdGridOff } from 'react-icons/md'

const EditRole = () => {
  return (
    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-700">Data Operator Role</h3>
                        <p className="text-sm text-gray-500 -mt-2">Here are the customizations available for the Data Operator role.</p>
                        
                        {/* Backdated entries section */}
                        <div className="mt-4 p-4">
                            <div className="flex items-center space-x-2 text-gray-700 mb-3">
                                <IoMdCalendar className="w-6 h-6 text-primary mr-6" />
                                <span className="font-normal text-lg text-gray-600">Allow backdated entries</span>
                            </div>
                            <div className="space-y-2 text-gray-700 pl-10">
                                <div className="p-3 bg-gray-50 rounded-sm border border-blue-300 cursor-pointer">
                                    <div className="flex items-center space-x-2">
                                        <input type="radio" id="always" name="backdate" defaultChecked className="form-radio text-blue-600 h-4 w-4" />
                                        <label htmlFor="always" className="font-medium text-gray-900">Always</label>
                                    </div>
                                    <p className="text-sm text-gray-500 pl-6 mt-1">Data Operator can add entry on any past date</p>
                                </div>
                                <div className="p-3 bg-gray-50 rounded-sm border border-gray-200 cursor-pointer">
                                    <div className="flex items-center space-x-2">
                                        <input type="radio" id="never" name="backdate" className="form-radio text-blue-600 h-4 w-4" />
                                        <label htmlFor="never" className="font-medium text-gray-900">Never</label>
                                    </div>
                                    <p className="text-sm text-gray-500 pl-6 mt-1">Data Operator cannot add entries on past date</p>
                                </div>
                                <div className="p-3 bg-gray-50 rounded-sm border border-gray-200 cursor-pointer">
                                    <div className="flex items-center space-x-2">
                                        <input type="radio" id="oneday" name="backdate" className="form-radio text-blue-600 h-4 w-4" />
                                        <label htmlFor="oneday" className="font-medium text-gray-900">One day before</label>
                                    </div>
                                    <p className="text-sm text-gray-500 pl-6 mt-1">Data Operator can entry on today and day before</p>
                                </div>
                            </div>
                        </div>

                        {/* Hide sections */}
                        <div className="p-4 bg-white space-y-4">
                            <div className="flex items-center justify-between">
                              <div>
                                  <div className="flex items-center space-x-2 text-gray-700">
                                    <MdGridOff className="w-6 h-6 text-primary mr-4" />
                                    <span className="font-normal text-base">Hide net balance & reports</span>
                                </div>
                                    <p className='text-xs text-gray-400 ml-8'>Data operators will not be able to see net balance and download reports</p>
                              </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" className="sr-only peer" />
                                    <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-400 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                </label>
                            </div>

                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="flex items-center space-x-2 text-gray-700">
                                    <LuEyeOff className="w-6 h-6 text-primary mr-4" />
                                    <span className="font-normal text-base">Hide entries by other members</span>
                                </div>
                                    <p className='text-xs text-gray-400 ml-8'>Data operators will not be able to see entries done by other members</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" className="sr-only peer" />
                                    <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-400 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                </label>
                            </div>
                        </div>
                        
                        {/* Warning and Action Buttons */}
                        <div className="mt-6 p-4 rounded-lg bg-orange-50 border border-orange-200 flex items-center space-x-3 text-orange-700">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c.749 0 1.252-.773.91-1.45L12.91 3.55c-.342-.686-1.478-.686-1.82 0L3.022 17.55c-.342.677.161 1.45.91 1.45z" />
                            </svg>
                            <p className="text-sm font-medium">Changes will be applicable to all data operator of this book</p>
                        </div>
                        <div className="flex justify-end space-x-4 mt-6">
                            <button className="px-6 py-2 rounded-full border border-gray-300 text-gray-600 font-medium hover:bg-gray-50 transition-colors">
                                Cancel
                            </button>
                            <button className="px-6 py-2 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors">
                                Save Changes
                            </button>
                        </div>
                    </div>
  )
}

export default EditRole