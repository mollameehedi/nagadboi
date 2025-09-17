import RightModal from '@/components/Common/RightModal/RightModal'
import RightModalFooter from '@/components/Common/RightModal/RightModalFooter'
import RightModalHeader from '@/components/Common/RightModal/RightModalHeader'
import React from 'react'

const EntryDatachange = ({isOpen,onClose,title,description,data}) => {
  
  return (
    <RightModal isOpen={isOpen}>
           <div>
             <RightModalHeader title={title} onClose={onClose}/>
            <div className="p-6">
          <p className="text-sm text-gray-500 mb-4">{description}</p>
          <div className="space-y-4">
            {data.length > 0 ? (
data.map((item,index) => (
   <label className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-100">
                        <input type="radio" name="category" className="form-radio h-5 w-5 text-blue-600" defaultChecked />
                        <span className="font-medium text-gray-800">{item.name}</span>
                        </label>
))
            ):(
              
              <div className='text-red-600 text-base'>Data Not Found</div>
            )}
         
          </div>
        </div>
           </div>


            <RightModalFooter btn_text1='Add New' btn_text2='Update'/>
    </RightModal>
  )
}

export default EntryDatachange