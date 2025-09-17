"use client"
import RightModal from '@/components/Common/RightModal/RightModal'
import RightModalFooter from '@/components/Common/RightModal/RightModalFooter'
import RightModalHeader from '@/components/Common/RightModal/RightModalHeader'
import React, { useState } from 'react'
import { GoSearch } from 'react-icons/go'
import { IoArrowForward } from 'react-icons/io5'

const MoveEntry = ({ isOpen, onCloss }) => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const books = [
    { id: 1, name: "September Expenses", createdOn: "Sep 11th 2025", members: 1 },
    { id: 2, name: "Hand book", createdOn: "Sep 11th 2025", members: 1 },
    { id: 3, name: "Travel Book", createdOn: "Sep 10th 2025", members: 3 },
    { id: 4, name: "Business Book", createdOn: "Sep 9th 2025", members: 2 },
  ];


       const filteredBooks = books.filter(book =>
    book.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleClose = () => {
    setShowMoveEntryModal(false);
  };

  const handleMove = () => {
    if (selectedBook) {
      console.log(`Moving entry to: ${selectedBook.name}`);
      // Add logic here to move the entry
      handleClose();
    }
  };


    return (
        <RightModal isOpen={isOpen}>
            <RightModalHeader title='Move 1 Entry' onClose={onCloss} />
            <div className="flex flex-col h-full bg-white px-6 py-4">
                <p className="text-sm text-gray-500 mb-4">Select a book where you want to move this entry</p>
                <div className="relative mb-4">
                    <input
                        type="text"
                        placeholder="Search book name..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pr-10 pl-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                     <GoSearch className="h-5 w-5 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"/>
                </div>
                <div className="flex-grow overflow-y-auto mb-4 -mx-2">
                    {filteredBooks.length > 0 ? (
                        filteredBooks.map(book => (
                            <div key={book.id}
                                className="p-3 mx-2 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
                                onClick={() => setSelectedBook(book)}
                            >
                                <label className="flex items-center space-x-3 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="bookSelection"
                                        className="form-radio h-5 w-5 text-blue-600 rounded-full focus:ring-blue-500 focus:outline-none transition-all"
                                        checked={selectedBook && selectedBook.id === book.id}
                                        onChange={() => setSelectedBook(book)}
                                    />
                                    <div>
                                        <span className="font-medium text-gray-800">{book.name}</span>
                                        <p className="text-xs text-gray-500 mt-1">
                                            Created On: {book.createdOn} | {book.members} Members
                                        </p>
                                    </div>
                                </label>
                            </div>
                        ))
                    ) : (
                        <div className="text-center text-gray-500 py-4">No books found.</div>
                    )}
                </div>
                <div className="flex-shrink-0 mt-4 border-t border-gray-200 pt-4">
                    <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                        <div className="flex flex-col items-center">
                            <span className='text-sm'>Moving from</span>
                            <span className="font-semibold text-sm text-gray-600">Business Book</span>
                        </div>
                        <div className="flex justify-between items-center">
                        <IoArrowForward className="h-6 w-6 text-gray-400 mr-4"/>
                           <div className='flex flex-col items-right'>
                             <span  className='text-sm'>Moving to</span>
                            <span className={`font-semibold ${selectedBook ? 'text-gray-600' : 'text-gray-600'}`}>
                                {selectedBook ? selectedBook.name : 'Select Book'}
                            </span>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
            <RightModalFooter btn_text1='Cancel' handleButton1={onCloss} btn_text2="Move" />
        </RightModal>
    )
}

export default MoveEntry