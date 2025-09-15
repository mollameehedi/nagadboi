import React from 'react'

const LeftModalFooter = ({btn_txt1,btn_text2}) => {
  return (
     <div className="p-4 border-t border-gray-200 flex justify-end space-x-3">
          <button className="rounded text-center focus:ring-4 focus:outline-none focus:ring-opacity-50 disabled:opacity-80 disabled:cursor-not-allowed font-semibold gap-2 items-center justify-center inline-flex min-w-[120px] border px-6 h-[48px] text-primary border-gray-200 cursor-pointer">{btn_txt1}</button>
          <button className="rounded text-center focus:ring-4 focus:outline-none focus:ring-opacity-50 disabled:opacity-80 disabled:cursor-not-allowed font-semibold gap-2 items-center justify-center inline-flex min-w-[120px] border px-6 h-[48px] text-white border-primary bg-primary cursor-pointer">{btn_text2}</button>
        </div>
  )
}

export default LeftModalFooter