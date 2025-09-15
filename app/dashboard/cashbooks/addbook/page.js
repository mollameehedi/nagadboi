"use client"
import EditRole from '@/components/Screen/Cashbook/AddBook/EditRole';
import EntryField from '@/components/Screen/Cashbook/AddBook/EntryField';
import Member from '@/components/Screen/Cashbook/AddBook/Member';
import DuplicateBook from '@/components/Screen/Cashbook/DuplicateBook';
import MoveBook from '@/components/Screen/Cashbook/MoveBook';
import AddOrRenameBookModal from '@/components/Screen/Common/AddOrRenameBookModal';
import React, { useState } from 'react'
import { FaArrowLeft, FaPencilAlt,  FaTrashAlt } from 'react-icons/fa';
import { MdContentCopy } from 'react-icons/md';

const AddBook = () => {
     const [activeTab, setActiveTab] = useState('members');

       const[isDuplicateOpen,setIsDuplicateOpen] = useState(false)
       const[duplicateSelect,setDuplicateSelect] = useState(false)
      const [isRenameModalOpen, setIsRenameModalOpen] = useState(false);
       const [selectedBook, setSelectedBook] = useState(null);




    const renderContent = () => {
        switch (activeTab) {
            case 'members':
                return  <Member/>;
            case 'entry-field':
                return <EntryField/>;
            case 'edit-role':
                return <EditRole/>;
            default:
                return null;
        }
    };

     const handleCopyBook = (bookId) => {
       setDuplicateSelect(bookId);
      setIsDuplicateOpen(true)
      
    };

    const handleAddUsers = (bookId) => {
        alert(`Adding users to book with ID: ${bookId}`);
    };

     const handleRenameBook = (id) => {
        setSelectedBook(id)
        setIsRenameModalOpen(true);
    };

        const handleSaveBookName = (newName) => {
        setCashbooks(
            cashbooks.map(book =>
                book.id === selectedBook.id ? { ...book, name: newName } : book
            )
        );
        setIsRenameModalOpen(false);
    };

    
    return (
        <div className="flex-1 bg-white  h-full">
                    <div className=" py-6">
                        {/* Action Bar */}
                        <div className="flex justify-between items-center pb-4 border-b border-gray-200 px-5">
                            <div className="flex items-center space-x-2 text-gray-900">
                                <FaArrowLeft className="w-4 h-4 font-medium  " />
                                <span className="font-medium text-base ">Settings</span>
                                <span className="text-gray-400 text-sm font-light">(Office Expence)</span>
                            </div>
                            <div className="flex space-x-4">
                                <button onClick={() => handleRenameBook('office_Expence')} className="flex items-center space-x-2 px-4 py-2 text-xs  text-primary font-medium hover:bg-gray-50 transition-colors">
                                    <FaPencilAlt className="w-4 h-4" />
                                    <span>Rename Book</span>
                                </button>
                                <button onClick={()=>handleCopyBook('offer exchange')} className="flex items-center space-x-2 px-4 py-2 text-xs  text-primary font-medium hover:bg-gray-50 transition-colors">
                                    <MdContentCopy className="w-4 h-4" />
                                    <span>Duplicate Book</span>
                                </button>
                                <button className="flex items-center space-x-2 px-4 py-2 text-xs text-red-500 font-medium hover:bg-red-50 transition-colors">
                                    <FaTrashAlt className="w-4 h-4" />
                                    <span>Delete Book</span>
                                </button>
                            </div>
                        </div>

                         {duplicateSelect && (
              <DuplicateBook
              isOpen={isDuplicateOpen}
              onClose={()=> setIsDuplicateOpen(false)}
              />
            )}
            {selectedBook && (
                <AddOrRenameBookModal
                    isOpen={isRenameModalOpen}
                    onClose={() => {setIsRenameModalOpen(false); selectedBook}}
                    actionName='Rename Book'
                    currentName={selectedBook}
                    onSave={handleSaveBookName}
                />
            )}

                        {/* Settings Sub-menu and Content */}
                          <div className="flex">
                            {/* Sub-menu */}
                            <div className="w-56 space-y-2 border-r border-gray-200 px-3">
                                <div className="space-y-1 px-0 py-2">
                                    <div
                                        className={`text-sm p-2 rounded-sm cursor-pointer text-gray-900 font-medium ${activeTab === 'members' ? 'bg-blue-100 ' : ' hover:bg-gray-200'}`}
                                        onClick={() => setActiveTab('members')}
                                    >
                                        <span >Members</span>
                                    <p className="text-xs text-gray-500 mt-1">Add, Change role, Remove</p>
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <div
                                        className={`text-sm p-2 rounded-sm cursor-pointer text-gray-900 font-medium ${activeTab === 'entry-field' ? 'bg-blue-100 ' : ' hover:bg-gray-200'}`}
                                        onClick={() => setActiveTab('entry-field')}
                                    >
                                        <span>Entry Field</span>
                                    <p className="text-xs text-gray-500 mt-1">Contact, Category, Payment</p>
                                    <p className="text-xs text-gray-500">model & Custom Fields</p>
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <div
                                        className={`text-sm p-2 rounded-sm cursor-pointer text-gray-900 font-medium ${activeTab === 'edit-role' ? 'bg-blue-100' : ' hover:bg-gray-200'}`}
                                        onClick={() => setActiveTab('edit-role')}
                                    >
                                        <span>Edit Data Operator Role</span>
                                    <p className="text-xs text-gray-500 mt-1">Make changes in role as per</p>
                                    <p className="text-xs text-gray-500">your need</p>
                                    </div>
                                </div>
                            </div>
                            {/* Content */}
                            <div className="flex-1 p-5 bg-white">
                                <div className='w-2/5'>
{renderContent()}
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
    );
};

export default AddBook