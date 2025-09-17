import CenterModal from '@/components/Common/CenterModal/CenterModal'
import FormInput from '@/components/Common/FormInput'
import RightModalFooter from '@/components/Common/RightModal/RightModalFooter'
import React from 'react'

const AddNewCategory = ({isOpen,onClose}) => {
  return (
    <CenterModal title='Add New Contact' className="pb-3 pt-0 mt-0" isOpen={isOpen} onClose={onClose}>
        <div className='px-6 py-4'>
             <FormInput
              type="text" 
              className="w-[100%] px-4 mt-2 py-2" 
              // value={newBookName} 
              // onChange={(e) => setNewBookName(e.target.value)} 
              placeholder="e.g. Salary, EMI, Food, Travel"
              label="Category Name"
              isRequired={true}
            />
        </div>
    <RightModalFooter btn_text2="save"/>
    </CenterModal>
  )
}

export default AddNewCategory