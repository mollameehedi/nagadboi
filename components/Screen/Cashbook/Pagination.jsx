import React from 'react'

const Pagination = () => (
  <div className="flex items-center justify-between px-4 py-2 text-sm text-gray-500">
    <div className="text-sm text-gray-700">
      Showing 1 - 1 of 1 entry
    </div>
    <div className="flex items-center gap-2">
      <span>Page 1 of 1</span>
      <button className="p-2 border rounded-full text-gray-400 hover:bg-gray-100 disabled:opacity-50" disabled>&lt;</button>
      <button className="p-2 border rounded-full text-gray-400 hover:bg-gray-100 disabled:opacity-50" disabled>&gt;</button>
    </div>
  </div>
);

export default Pagination