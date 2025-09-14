"use service"
import React, { useState } from 'react'
import AddOrRenameBookModal from '../Common/AddOrRenameBookModal';
import { RiWhatsappFill } from 'react-icons/ri';
import EmailAddPopup from '../Common/EmailAddPopup';
import Icons from '@/app/assets/Icon';
import { TiPlus } from 'react-icons/ti';

const RightSide = () => {
     const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
     const [isAddBookModalOpen, setIsAddBookModalOpen] = useState(false);
  const handleSaveBookName = (newName) => {
        setCashbooks(
            cashbooks.map(book =>
                book.id === selectedBook.id ? { ...book, name: newName } : book
            )
        );
        setIsRenameModalOpen(false);
    };

  return (
   <div className="lg:w-80 space-y-4">
               <button onClick={() => setIsAddBookModalOpen(true)} className="flex-1 flex items-center justify-center sm:flex-none px-6 py-2 bg-primary/90 text-white rounded-sm hover:bg-indigo-700 transition-colors w-full">
                  <TiPlus /> Add New Book
                </button>
                <AddOrRenameBookModal
                    isOpen={isAddBookModalOpen}
                    onClose={() => {setIsAddBookModalOpen(false);}}
                    actionName='Add Book'
                    currentName=''
                    onSave={handleSaveBookName}
                />

            <div className=" p-4 rounded-xm border bg-green-200/20 border-gray-200 space-y-2">
                <span className=' inline-block  rounded-full'>
                <Icons.EmailPlush className="inline-block text-lg h-[40px]"/>
                </span>
                <h4 className=" text-sm font-semibold text-gray-600">Login via Email ID</h4>
              <p className="text-gray-500 text-sm font-normal">Verify email to login to mobile app & desktop</p>
              <button onClick={() => setIsEmailModalOpen(true)}  className="flex-1 flex items-center justify-center sm:flex-none px-6 py-2 bg-primary/90 text-white rounded-sm hover:bg-indigo-700 transition-colors">
                Add Email
              </button>
            </div>
               {/* Add Email Modal */}
          <EmailAddPopup isOpen={isEmailModalOpen} onClose={() => setIsEmailModalOpen(false)} />


             <div className="bg-white p-6 rounded-xm border border-gray-200 space-y-2">
                <span className='bg-green-600/10 h-[50px] w-[50px] inline-block text-center leading-[50px] rounded-full'>
                <RiWhatsappFill   className="text-green-600 inline-block  text-xl"/>
                </span>
                <h4 className=" text-sm font-semibold text-gray-600">Need help in business setup?</h4>
              <p className="text-gray-500 text-sm font-normal">Our support team will help you</p>
              <a href="#" className="flex-1 flex items-center justify-start sm:flex-none px-0 py-2 text-primary ">
                Contact Us
                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
  )
}

export default RightSide