import Icons from '@/app/assets/Icon';
import CenterModal from '@/components/Common/CenterModal/CenterModal'
import React from 'react'
import { BiCheck } from 'react-icons/bi';
import { GoDownload } from 'react-icons/go';

const MoveBook = ({isOpen,onClose}) => {
    const handleSubmite = () =>{
        console.log('done');
        
    } 
  return (
   <CenterModal title="Not Enabled on Web App" isOpen={isOpen} onClose={onClose} handleSubmite={handleSubmite()}>
<div className="mt-2 px-8 space-y-4">
          <div className="flex justify-center mb-4">
            <div className="w-[70px] h-[70px] text-gray-500">
              <Icons.MobileMagic className="w-full h-full text-gray-500"/>
            </div>
          </div>
          <h3 className="text-2xl font-medium text-gray-900 text-center mb-1">Use mobile app to make these changes</h3>
          <p className="text-gray-500 text-sm text-center">This feature is not available on web app yet. Please use the mobile app.</p>
        </div>
         <div className="flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-3 mt-6 border-t-1 border-gray-200 pt-7 mb-3 px-8">
          <button className="px-6 py-2 cursor-pointer border border-gray-300 rounded-lg text-primary hover:bg-gray-100 flex items-center justify-center space-x-2">
           <GoDownload className="text-2xl"/>
            <span>Download mobile app</span>
          </button>
          <button onClick={() => setIsOpen(false)} className="flex px-8 py-2 bg-primary text-white rounded-sm cursor-pointer  hover:bg-primary/75 "> <BiCheck  className="text-2xl mr-2"/><span> Ok, Got It</span></button>
        </div>
        
   </CenterModal>
  )
}

export default MoveBook