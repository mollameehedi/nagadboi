"use client"
import React, { useState } from 'react'
import { FaFileImport } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { IoChevronDownCircleOutline } from 'react-icons/io5';
import { MdAttachFile } from 'react-icons/md';
import { PiPlusCircleDuotone } from 'react-icons/pi';
import { FiPlusCircle } from 'react-icons/fi';
import AddContactModal from '../Contact/AddContactModal';
import AddNewCategory from '../Category/AddNewCategory';
import Dropdown from '@/components/Common/CashEntry/Dropdown';
import AddPaymentMode from '../PaymentMode/AddPaymentMode';

const CashEntryModal = ({ isOpen, onClose }) => {
  const [entryType, setEntryType] = useState('cashIn');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [time, setTime] = useState(new Date().toTimeString().split(' ')[0].substring(0, 5));

  const [contactSearch, setContactSearch] = useState('');
  const [selectedContact, setSelectedContact] = useState('fuel');
  const [showContactsDropdown, setShowContactsDropdown] = useState(false);
  const [showAddContactModal, setShowAddContactModal] = useState(false);
  const [showImportBulkModal, setShowImportBulkModal] = useState(false);



  // State for Category
  const [categories, setCategories] = useState([
    { id: 1, name: 'Fuel' },
    { id: 2, name: 'Groceries' },
    { id: 3, name: 'Rent' },
    { id: 4, name: 'Salary' },
  ]);
  const [categorySearch, setCategorySearch] = useState('');
  const [showCategoriesDropdown, setShowCategoriesDropdown] = useState(false);
  const [showAddCategoryModal, setShowAddCategoryModal] = useState(false);




    // State for Payment Mode
    const [paymentModes, setPaymentModes] = useState([
        { id: 1, name: 'Cash' },
        { id: 2, name: 'Online' },
        { id: 3, name: 'Credit Card' },
        { id: 4, name: 'Debit Card' },
    ]);
    const [paymentModeSearch, setPaymentModeSearch] = useState('');
    const [showPaymentModesDropdown, setShowPaymentModesDropdown] = useState(false);
    const [showAddPaymentModeModal, setShowAddPaymentModeModal] = useState(false);

  if (!isOpen) return null;

  const handleContactSelect = (contact) => {
    setSelectedContact(contact);
    setContactSearch(contact.name);
    setShowContactsDropdown(false);
  };

  const handleSearchChange = (e) => {
    setContactSearch(e.target.value);
    setSelectedContact(null);
    setShowContactsDropdown(true);
  };

  const handleAddContactClick = () => {
    setShowContactsDropdown(false);
    setShowAddContactModal(true);
  };

  const handleImportBulkClick = () => {
    setShowContactsDropdown(false);
    setShowImportBulkModal(true);
  };



  // Category Handlers
  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(categorySearch.toLowerCase())
  );
  const handleCategorySelect = (category) => {
    setCategorySearch(category.name);
    setShowCategoriesDropdown(false);
  };


     // Payment Mode Handlers
    const filteredPaymentModes = paymentModes.filter(mode =>
        mode.name.toLowerCase().includes(paymentModeSearch.toLowerCase())
    );
    const handlePaymentModeSelect = (mode) => {
        setPaymentModeSearch(mode.name);
        setShowPaymentModesDropdown(false);
    };

    const handleAddNewItem = (list, setList, newItemName) => {
        const newItem = {
            id: list.length + 1,
            name: newItemName
        };
        setList([...list, newItem]);
    };





  return (
    <>
      <div className={`fixed inset-0 bg-gray-600/40 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className={`fixed top-0 p-3 right-0 h-full flex justify-between flex-col w-full max-w-xl bg-white shadow-lg transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div>
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <h3 className={`text-xl font-medium text-gray-900 ${entryType === 'cashIn' ? 'text-green-700' : 'text-red-700'}`}>Add Cash In Entry</h3>
              <button onClick={onClose} className='p-2 cursor-pointer'>
                <IoMdClose />
              </button>
            </div>

            {/* Body */}
            <div className="flex-1  h-full p-4 md:p-6">
              <div className="flex space-x-2 mb-6">
                <button
                  className={`px-4 py-2 rounded-full border border-gray-200 text-sm font-normal cursor-pointer  ${entryType === 'cashIn' ? 'bg-green-700 text-white forn-normal' : ' text-gray-800'}`}
                  onClick={() => setEntryType('cashIn')}
                >
                  Cash In
                </button>
                <button
                  className={`px-4 py-2 rounded-full border border-gray-200 text-sm font-normal  cursor-pointer ${entryType === 'cashOut' ? 'bg-red-700 text-white forn-normal' : ' text-gray-800'}`}
                  onClick={() => setEntryType('cashOut')}
                >
                  Cash Out
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Date *</label>
                  <div className="relative">
                    <input
                      type="date"
                      className="w-full px-4 py-2 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Time *</label>
                  <div className="relative">
                    <input
                      type="time"
                      className="w-full px-4 py-2 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-1">Amount <span className='text-red-700'>*</span></label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g. 890 or 100 + 200 + 3"
                />
              </div>

              {/* <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-1">Contact Name</label>
            <select className="w-full px-4 py-2 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Search or Select</option>
              <option>John Doe</option>
              <option>Jane Smith</option>
            </select>
          </div> */}

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-1">Contact Name</label>
                <div className="relative">
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Search or Select"
                    value={contactSearch}
                    onChange={handleSearchChange}
                    onFocus={() => setShowContactsDropdown(true)}
                    onBlur={() => setTimeout(() => setShowContactsDropdown(false), 200)}
                  />
                  {showContactsDropdown && (
                    <div className="absolute z-10 p-3 w-full mt-1 bg-white border border-gray-200 rounded-sm shadow-lg max-h-48 overflow-y-auto">
                      <button
                        className="flex items-center font-medium w-full px-4 py-2 text-sm text-blue-600 hover:bg-gray-100"
                        onMouseDown={handleAddContactClick}
                      >
                        <PiPlusCircleDuotone className='text-2xl mr-3' /> Add New Contact
                      </button>
                      <button
                        className="flex items-center w-ful font-medium  px-4 py-2 text-sm text-green-600 hover:bg-gray-100"
                        onMouseDown={handleImportBulkClick}
                      >
                        <FaFileImport className='text-xl mr-3' /> Import Bulk contacts from CSV
                      </button>
                      {/* {filteredContacts.length > 0 ? (
                        filteredContacts.map(contact => (
                          <div
                            key={contact.id}
                            className="px-4 py-2 text-gray-800 cursor-pointer hover:bg-gray-100"
                            onMouseDown={(e) => {
                              e.preventDefault();
                              handleContactSelect(contact);
                            }}
                          >
                            {contact.name}
                          </div>
                        ))
                      ) : (
                        <div className="px-4 py-2 text-gray-500">No contacts found.</div>
                      )} */}
                    </div>
                  )}
                </div>
              </div>


              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-1">Remarks</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g. Enter Details (Name, Bill No, Item Name, Quantity etc)"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                   <Dropdown
                                    label="Category Name"
                                    placeholder="Search or Select"
                                    searchTerm={categorySearch}
                                    setSearchTerm={setCategorySearch}
                                    showDropdown={showCategoriesDropdown}
                                    setShowDropdown={setShowCategoriesDropdown}
                                    filteredItems={filteredCategories}
                                    handleSelect={handleCategorySelect}
                                    addNewLabel="Add New Category"
                                    onAddNew={() => setShowAddCategoryModal(true)}
                                />
                </div>
                <div>
                   <Dropdown
                                    label="Payment Mode"
                                    placeholder="Search or Select"
                                    searchTerm={paymentModeSearch}
                                    setSearchTerm={setPaymentModeSearch}
                                    showDropdown={showPaymentModesDropdown}
                                    setShowDropdown={setShowPaymentModesDropdown}
                                    filteredItems={filteredPaymentModes}
                                    handleSelect={handlePaymentModeSelect}
                                    addNewLabel="Add New Mode"
                                    onAddNew={() => setShowAddPaymentModeModal(true)}
                                />
                </div>
              </div>

              <div className="mb-6">
                <button className="flex items-center  space-x-1 text-primary rounded-sm border px-5 p-1 border-gray-200 hover:text-blue-800">
                  <MdAttachFile />
                  <span>Attach Bills</span>
                </button>
                <p className="text-sm text-gray-500 mt-1">Attach up to 4 images or PDF files</p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200 flex justify-end space-x-3">
            <button className="rounded text-center focus:ring-4 focus:outline-none focus:ring-opacity-50 disabled:opacity-80 disabled:cursor-not-allowed font-semibold gap-2 items-center justify-center inline-flex min-w-[120px] border px-6 h-[48px] text-primary border-gray-200 cursor-pointer">Save</button>
            <button className="rounded text-center focus:ring-4 focus:outline-none focus:ring-opacity-50 disabled:opacity-80 disabled:cursor-not-allowed font-semibold gap-2 items-center justify-center inline-flex min-w-[120px] border px-6 h-[48px] text-white border-primary bg-primary cursor-pointer">Save & Add New</button>
          </div>
        </div>
      </div>
      <AddContactModal isOpen={showAddContactModal} onClose={() => setShowAddContactModal(false)} />
      <AddNewCategory isOpen={showAddCategoryModal} onClose={() => setShowAddCategoryModal(false)} />
      <AddPaymentMode isOpen={showAddPaymentModeModal} onClose={() => setShowAddPaymentModeModal(false)} />
    </>
  );
};

export default CashEntryModal