import React from 'react'

 const ActionButton = ({ icon, text, subtext, onClick }) => (
    <button
      onClick={onClick}
      className="flex items-center w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
    >
      <div className="flex-shrink-0 mr-4">
        {icon}
      </div>
      <div className="flex-grow">
        <p className="font-normal text-base  text-gray-800">{text}</p>
        <p className="text-sm  text-sm text-gray-500 mt-1">{subtext}</p>
      </div>
    </button>
  );

export default ActionButton