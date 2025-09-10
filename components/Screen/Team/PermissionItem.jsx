import React from 'react'
import { FaCheckCircle } from 'react-icons/fa';
import { TiDelete } from 'react-icons/ti';  

const PermissionItem = ({ text, isRestriction = false }) => (
  <div className="flex items-start text-gray-700 py-2">
    {isRestriction ? <TiDelete className="flex-shrink-0 text-red-700 mt-1 mr-2 text-3xl" /> : <FaCheckCircle className="flex-shrink-0 text-green-700 mt-1 mr-2 text-lg" />}
    <span>{text}</span>
  </div>
);

export default PermissionItem