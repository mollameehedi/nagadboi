"use client"
import ActionButton from '@/components/Common/CashEntry/ActionButton'
import CenterModal from '@/components/Common/CenterModal/CenterModal'
import React, { useState } from 'react'
import { FaPlusMinus } from 'react-icons/fa6'
import { HiArrowTurnUpRight } from 'react-icons/hi2'
import { MdContentCopy } from 'react-icons/md'
import MoveEntry from './MoveEntry'

const MoreAction = ({isOpen,onClose}) => {
     const [showMoveEntryModal, setShowMoveEntryModal] = useState(false);

  const handleAction = (action) => {
    console.log(`Action selected: ${action}`);
  }
  console.log(showMoveEntryModal)
  return (
    
   <>
     <CenterModal title="More Actions" isOpen={isOpen} onClose={onClose}>
         
         <div className='py-4 px-6'>
            <p className='text-sm bg-gray-200 rounded-sm p-4'>Transfer Entry</p>
          <ActionButton
            onClick={() => setShowMoveEntryModal(true)}
            icon={
              <HiArrowTurnUpRight className="h-6 w-6 text-gray-500"/>
            }
            text="Move Entry"
            subtext="Entry will be moved to the other selected book"
          />
          <ActionButton
            onClick={() => handleAction('Copy Entry')}
            icon={
              <MdContentCopy className="h-6 w-6 text-gray-500"/>
            }
            text="Copy Entry"
            subtext="Entry will stay in both books"
          />
          <ActionButton
            onClick={() => handleAction('Copy Opposite Entry')}
            icon={
                <FaPlusMinus className="h-6 w-6 text-gray-500"/>
            }
            text="Copy Opposite Entry"
            subtext="Cash In entry will be added as Cash Out entry in other book and vice versa"
          />
         </div>
    </CenterModal>
    <MoveEntry isOpen={showMoveEntryModal} onCloss={()=> setShowMoveEntryModal(false)}/>
   </>
  )
}

export default MoreAction