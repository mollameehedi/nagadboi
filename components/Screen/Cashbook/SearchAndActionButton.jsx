"use client"

import { FaSearch, FaPlus} from 'react-icons/fa'

const SearchAndActionButton = () => (
  <div className="flex items-center justify-between p-4">
    <div className="flex items-center w-1/2 rounded-lg border border-gray-300 bg-white">
      <FaSearch className="w-4 h-4 text-gray-400 ml-4" />
      <input
        type="text"
        placeholder="Search by remark or amount..."
        className="flex-1 px-4 py-2 text-sm bg-transparent focus:outline-none"
      />
    </div>
    <div className="flex gap-2">
      <button className="flex items-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-green-500 hover:bg-green-600">
        <FaPlus className="w-4 h-4 mr-2" /> Cash In
      </button>
      <button className="flex items-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-red-500 hover:bg-red-600">
        <FaPlus className="w-4 h-4 mr-2" /> Cash Out
      </button>
    </div>
  </div>
);

export default SearchAndActionButton