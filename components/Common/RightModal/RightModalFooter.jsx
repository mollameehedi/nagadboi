import React from 'react'

const RightModalFooter = ({btn_text1,btn_text2,handleButton1,handleButton2}) => {
  return (
     <div className="p-4 border-t border-gray-200 flex justify-end space-x-3">
      {btn_text1&& 
      
          <button onClick={handleButton1} className="rounded text-center focus:ring-4 focus:outline-none focus:ring-opacity-50 disabled:opacity-80 disabled:cursor-not-allowed font-semibold gap-2 items-center justify-center inline-flex min-w-[120px] border px-6 h-[48px] text-primary border-gray-200 cursor-pointer">{btn_text1}</button>
      }
         {btn_text2 &&  <button onClick={handleButton2} className="rounded text-center focus:ring-4 focus:outline-none focus:ring-opacity-50 disabled:opacity-80 disabled:cursor-not-allowed font-semibold gap-2 items-center justify-center inline-flex min-w-[120px] border px-6 h-[48px] text-white border-primary bg-primary cursor-pointer">{btn_text2}</button>}
        </div>
  )
}

export default RightModalFooter