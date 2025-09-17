"use client"
import ActionButton from '@/components/Common/CashEntry/ActionButton'
import CenterModal from '@/components/Common/CenterModal/CenterModal'
import React, { useState } from 'react'
import { FaPlusMinus } from 'react-icons/fa6'
import { HiArrowTurnUpRight } from 'react-icons/hi2'
import { MdContentCopy } from 'react-icons/md'
import MoveEntry from './MoveEntry'
import BookSelectionModal from './BookSelectionModal'

const MoreAction = ({isOpen,onClose}) => {
     const [showMoveEntryModal, setShowMoveEntryModal] = useState(false);
     const [isBookSelectionModalOpen, setIsBookSelectionModalOpen] = useState(false);
    const [currentAction, setCurrentAction] = useState(null);
    const [isMoreActionsModalOpen, setIsMoreActionsModalOpen] = useState(false);

       const books = [
    { id: 1, name: "September Expenses", createdOn: "Sep 11th 2025", members: 1 },
    { id: 2, name: "Hand book", createdOn: "Sep 11th 2025", members: 1 },
    { id: 3, name: "Travel Book", createdOn: "Sep 10th 2025", members: 3 },
    { id: 4, name: "Business Book", createdOn: "Sep 9th 2025", members: 2 },
  ];


  
   const handleAction = (selectedBook) => {
    switch (currentAction) {
      case 'move':
        console.log(`Moving entry to: ${selectedBook.name}`);
        // Add move logic here
        break;
      case 'copy':
        console.log(`Copying entry to: ${selectedBook.name}`);
        // Add copy logic here
        break;
      case 'copyOpposite':
        console.log(`Copying opposite entry to: ${selectedBook.name}`);
        // Add copy opposite logic here
        break;
      default:
        break;
    }
    setIsBookSelectionModalOpen(false);
  };

  const handleOpenBookSelection = (action) => {
    setCurrentAction(action);    
    setIsMoreActionsModalOpen(false);
    setIsBookSelectionModalOpen(true);
  };
 const getModalProps = () => {
    switch (currentAction) {
      case 'move':
        return {
          title: "Move 1 Entry",
          description: "Select a book where you want to move this entry.",
          actionButtonText: "Move",
        };
      case 'copy':
        return {
          title: "Copy 1 Entry",
          description: "Select a book where you want to copy this entry.",
          actionButtonText: "Copy",
        };
      case 'copyOpposite':
        return {
          title: "Copy Opposite Entry",
          description: "Select a book where you want to copy the opposite entry.",
          actionButtonText: "Add Opposite",
        };
      default:
        return {};
    }
  };



  return (
    
   <>
     <CenterModal title="More Actions" isOpen={isOpen} onClose={onClose}>
         
         <div className='py-4 px-6'>
            <p className='text-sm bg-gray-200 rounded-sm p-4'>Transfer Entry</p>
          <ActionButton
             onClick={() => handleOpenBookSelection('move')}
            icon={
              <HiArrowTurnUpRight className="h-6 w-6 text-gray-500"/>
            }
            text="Move Entry"
            subtext="Entry will be moved to the other selected book"
          />
          <ActionButton
           
            onClick={() => handleOpenBookSelection('copy')}
            icon={
              <MdContentCopy className="h-6 w-6 text-gray-500"/>
            }
            text="Copy Entry"
            subtext="Entry will stay in both books"
          />
          <ActionButton
             
              onClick={() => handleOpenBookSelection('copyOpposite')}
            icon={
                <FaPlusMinus className="h-6 w-6 text-gray-500"/>
            }
            text="Copy Opposite Entry"
            subtext="Cash In entry will be added as Cash Out entry in other book and vice versa"
          />
         </div>
    </CenterModal>
     {isBookSelectionModalOpen && (
        <BookSelectionModal
          isOpen={isBookSelectionModalOpen}
          onClose={() => setIsBookSelectionModalOpen(false)}
          books={books}
          onAction={handleAction}
          {...getModalProps()}
        />
      )}
   </>
  )
}

export default MoreAction