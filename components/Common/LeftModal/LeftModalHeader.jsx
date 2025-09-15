import React from 'react'
import { IoMdClose } from 'react-icons/io'

const LeftModalHeader = ({title,onClose}) => {
  return (
      <div className="flex  justify-between items-center py-4 px-8 border-b border-gray-200">
          <h3 className={`text-xl font-medium text-gray-900`}>{title}</h3>
          <button onClick={onClose} className='p-2 cursor-pointer border border-gray-200'>
            <IoMdClose />
          </button>
        </div>
  )
}

export default LeftModalHeader