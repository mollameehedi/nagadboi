"use client"

import { FaSearch, FaPlus} from 'react-icons/fa'

const SearchAndActionButton = () => (
  <div className="flex items-center justify-between p-4">
     <div className="relative w-3/10">
                <input
                  type="text"
                  placeholder="Search by remark or amount..."
                  className="w-full pl-3 pr-4 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:ring-indigo-200 placeholder:text-gray-400"
                />
                <svg className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
    <div className="flex gap-5">
      <button className="flex items-center px-6 py-2 text-sm font-medium text-white rounded-sm bg-green-700 hover:bg-green-600">
        <FaPlus className="w-4 h-4 mr-2" /> Cash In
      </button>
      <button className="flex items-center px-6 py-2 text-sm font-medium text-white rounded-sm bg-red-700 hover:bg-red-600">
        <FaPlus className="w-4 h-4 mr-2" /> Cash Out
      </button>
    </div>
  </div>
);

export default SearchAndActionButton