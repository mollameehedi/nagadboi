'use client';

import Icons from '@/app/assets/Icon';
import CashBookItem from '@/components/Screen/Cashbook/CashBookItem';
import AddOrRenameBookModal from '@/components/Screen/Common/AddOrRenameBookModal';
import React, { useState } from 'react';
import { FaUsers } from 'react-icons/fa6';
import { MdKeyboard} from 'react-icons/md';
import RightSide from '@/components/Screen/Cashbook/RightSide';
import LeftModal from '@/components/Common/LeftModal/LeftModal';
import DuplicateBook from '@/components/Screen/Cashbook/DuplicateBook';

const CashBook = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('Last Updated');
  const [hoveredBook, setHoveredBook] = useState(null);
  const[isDuplicateOpen,setIsDuplicateOpen] = useState(false)
  const[duplicateSelect,setDuplicateSelect] = useState(false)

  const handleDropdownToggle = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleMouseEnter = (bookName) => {
    setHoveredBook(bookName);
  };

  const handleMouseLeave = () => {
    setHoveredBook(null);
  };

    const cashbooks = [
    {
      id: 1,
      name: 'Shafi SketchBook',
      members: 2,
      updatedDays: 20,
      balance: 100,
    },
    {
      id: 2,
      name: 'Office Expence',
      members: 5,
      updatedDays: 5,
      balance: 5000,
    },
    {
      id: 3,
      name: 'Business Book',
      members: 3,
      updatedDays: 1,
      balance: -250,
    },
  ];
  


  const [isRenameModalOpen, setIsRenameModalOpen] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null);

    const handleRenameBook = (id) => {
        const bookToRename = cashbooks.find(book => book.id === id);
        setSelectedBook(bookToRename);
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

    const handleCopyBook = (bookId) => {
      
      
    };

    const handleAddUsers = (bookId) => {
        alert(`Adding users to book with ID: ${bookId}`);
    };

    const handleLeaveBook = (bookId) => {
      
        setDuplicateSelect(bookId);
      setIsDuplicateOpen(true)
      console.log(bookId);
    };






  return (
    <div className="bg-white min-h-screen font-sans antialiased flex flex-col">
      {/* Top Header */}
      <div className="flex items-center justify-between h-16 px-6">
        <div className="flex items-center">
          <span className="text-xl font-bold text-indigo-600">Easy</span>
        </div>
        <div className="flex items-center space-x-6">
          <button className="rounded text-center focus:ring-4 focus:outline-none focus:ring-opacity-50 disabled:opacity-80 disabled:cursor-not-allowed font-normal gap-2 items-center justify-center inline-flex px-6 h-[40px] bg-transparent hover:border-blue-900 text-gray-400">
            <MdKeyboard />
            Shortcuts
          </button>
          <button className="rounded text-center focus:ring-4 focus:outline-none focus:ring-opacity-50 disabled:opacity-80 disabled:cursor-not-allowed font-semibold gap-2 items-center justify-center inline-flex border px-6 h-[40px] bg-transparent border-gray-100 shadow-xs hover:border-blue-900 text-blue-900">
               <FaUsers className='sidebar_item_icon' /> 
            Business Team
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-8">
        {/* Role and Search Section */}
        <div className="mb-8 w-full">
          <div className="bg-orange-100 text-orange-800 rounded-lg py-2 px-4 inline-flex w-full items-center text-sm font-medium">
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Your Role: <span className='text-gray-800 font-medium '>Partner</span> <a href="#" className="underline ml-1">View</a>
          </div>
        </div>

        {/* Main Content Area */}
        {/* Main Content Area */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Books List */}
          <div className="flex-1 space-y-4">
            <div className="flex flex-col sm:flex-row items-center justify-content-start gap-4">
              <div className="relative w-2/5">
                <input
                  type="text"
                  placeholder="Search by book name..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="w-full pl-3 pr-4 py-2 border rounded-lg border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-200 placeholder:text-gray-400"
                />
                <svg className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <div className="flex items-center space-x-4 w-full sm:w-auto">
                <select
                  value={sortBy}
                  onChange={handleSortChange}
                  className="flex-1 py-2 px-4 border-1 border-gray-200 text-gray-900 rounded-lg focus:outline-none text-sm focus:ring-2 focus:ring-indigo-200 placeholder:text-gray-900"
                >
                  <option>Sort By: Last Updated</option>
                  <option>Sort By: A-Z</option>
                </select>
              </div>
            </div>

             <div className="flex-1 space-y-4">


            {/* Book Entries */}
            <div className="space-y-4">
              {/* Shafi SketchBook */}
         {cashbooks.length > 0 ? (
                    cashbooks.map((book,index) => (
                        <CashBookItem
                            key={index}
                            name={book.name}
                            balance={book.balance}
                            updatedDays={book.updatedDays}
                            memeber={book.members}
                            onRenameBook={() => handleRenameBook(book.id)}
                            onCopyBook={() => handleCopyBook(book.id)}
                            onAddUsers={() => handleAddUsers(book.id)}
                            onLeaveBook={() => handleLeaveBook(book.id)}
                        />
                    ))
                ) : (
                    <div className="p-4 text-center text-gray-500">No cashbooks found.</div>
                )}

   {selectedBook && (
                <AddOrRenameBookModal
                    isOpen={isRenameModalOpen}
                    onClose={() => {setIsRenameModalOpen(false); selectedBook.name}}
                    actionName='Rename Book'
                    currentName={selectedBook.name}
                    onSave={handleSaveBookName}
                />
            )}
            {duplicateSelect && (
              <DuplicateBook
              isOpen={isDuplicateOpen}
              onClose={()=> setIsDuplicateOpen(false)}
              />
            )}
            </div>

            {/* Add New Book Section */}
            <div className="bg-white p-4 rounded-sm border border-gray-200 space-y-4">
              <div className="flex items-center space-x-4">
                <Icons.AddBook className=" inline-block text-lg h-[40px] w-[40px] rounded-full p-2 bg-primary/10"/>
                <div>
                  <h4 className="text-lg text-gray-900 font-medium">Add New Book</h4>
                  <p className="text-gray-500 text-sm">Click to quickly add books for</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <button className="px-5 py-1 border border-primary/30 bg-primary/10 text-primary rounded-2xl hover:bg-gray-100 transition-colors">
                  September Expenses
                </button>
                <button className="px-5 py-1 border border-primary/30  bg-primary/10 text-primary rounded-2xl hover:bg-gray-100 transition-colors">
                  Project Book
                </button>
                <button className="px-5 py-1 border border-primary/30 bg-primary/10 text-primary rounded-2xl hover:bg-gray-100 transition-colors">
                  2025 Ledger
                </button>
                <button className="px-5 py-1 border border-primary/30 bg-primary/10 text-primary rounded-2xl hover:bg-gray-100 transition-colors">
                  Staff Salary
                </button>
              </div>
            </div>
          </div>

          </div>

          {/* Right Sidebar */}
          <RightSide/>
        </div>
      </div>
    </div>
  );
};

export default CashBook;
