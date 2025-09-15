"use client"

import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa'
const SummaryCards = ({ cashIn, cashOut, netBalance }) => {

  return (
  <>
  
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
    <div className="bg-white p-4 rounded-lg shadow-sm border border-green-200">
      <button className="flex items-center cursor-pointer text-green-600 mb-2">
        <FaPlus className="w-5 h-5 mr-2" />
        <span className="text-sm font-medium">Cash In</span>
      </button>
      <div className="text-2xl font-bold text-green-600">{cashIn}</div>
    </div>
    <div className="bg-white p-4 rounded-lg shadow-sm border border-red-200">
      <div className="flex items-center text-red-600 mb-2">
        <FaMinus className="w-5 h-5 mr-2" />
        <span className="text-sm font-medium">Cash Out</span>
      </div>
      <div className="text-2xl font-bold text-red-600">{cashOut}</div>
    </div>
    <div className="bg-white p-4 rounded-lg shadow-sm border border-indigo-200">
      <div className="flex items-center text-indigo-600 mb-2">
        <span className="text-sm font-medium">Net Balance</span>
      </div>
      <div className="text-2xl font-bold text-indigo-600">{netBalance}</div>
    </div>
  </div>
  
  </>
);
}

export default SummaryCards