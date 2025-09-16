"use client"
import TableFilterDropdwon from '@/components/Common/CashEntry/TableFilterDropdwon';
import { useEffect, useRef, useState } from 'react';
import { BiTrash } from 'react-icons/bi';
import { FaTrashAlt, FaPencilAlt } from 'react-icons/fa'
import { FaPlusMinus } from 'react-icons/fa6';
import { FiChevronDown, FiChevronsDown, FiEdit, FiTrash } from 'react-icons/fi';
import { GoArrowSwitch } from 'react-icons/go';
import { HiArrowTurnUpRight, HiOutlineUsers } from 'react-icons/hi2';
import { MdContentCopy, MdOutlineCategory, MdOutlinePayments, MdRemoveCircleOutline } from 'react-icons/md';
import { PiPencilCircleDuotone } from 'react-icons/pi';
import { TbPencilDiscount } from 'react-icons/tb';
import EntryDetails from './BooItem/CashEntry/EntryDetails';


const initialTransactions = [
  { date: 'Today', time: '03:33 PM', details: 'test', contact: '(Ten)', contactType: '(Customer)', category: 'Sale', mode: 'Cash', amount: '400', balance: '465' },
  { date: 'Today', time: '03:32 PM', details: '--', contact: '(Ten)', contactType: '(Customer)', category: 'Sale', mode: 'Cash', amount: '5', balance: '65' },
  { date: 'Today', time: '03:28 PM', details: 'test', contact: '(Ten)', contactType: '(Customer)', category: 'Food', mode: 'Online', amount: '10', balance: '60' },
  { date: 'Today', time: '03:26 PM', details: 'test', contact: '(Ten)', contactType: '(Customer)', category: 'Sale', mode: 'Cash', amount: '50', balance: '70' },
  { date: 'Today', time: '10:39 AM', details: 'Inventore duis id a', contact: '', contactType: '', category: 'Cash', mode: 'Cash', amount: '20', balance: '20' },
];

const TransactionTable = () => {
  const [transactions, setTransactions] = useState(initialTransactions);
  const [selected, setSelected] = useState(new Set());

  const [showModal, setShowModal] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);




  const handleSelectAll = (e) => {
    if (e.target.checked) {
      const allIds = new Set(transactions.map((_, index) => index));
      setSelected(allIds);
    } else {
      setSelected(new Set());
    }
  };

  const handleCheckboxChange = (index) => {
    const newSelected = new Set(selected);
    if (newSelected.has(index)) {
      newSelected.delete(index);
    } else {
      newSelected.add(index);
    }
    setSelected(newSelected);
  };

  const handleDeleteSelected = () => {
    if (selected.size === 0) {
      console.log('No transactions selected for deletion.');
      return;
    }
    const updatedTransactions = transactions.filter((_, index) => !selected.has(index));
    setTransactions(updatedTransactions);
    setSelected(new Set());
  };

  const isAllSelected = selected.size === transactions.length && transactions.length > 0;



  const handleMoveEntries = () => {
    console.log('Moving selected entries:', Array.from(selected));
    setShowMoveCopyDropdown(false);
  };

  const handleCopyEntries = () => {
    console.log('Copying selected entries:', Array.from(selected));
    setShowMoveCopyDropdown(false);
  };

  const handleCopyOppositeEntries = () => {
    console.log('Copying opposite entries for selected:', Array.from(selected));
    setShowMoveCopyDropdown(false);
  };

  // transaction row  click handle
  const handleRowClick = (transaction) => {
    setSelectedTransaction(transaction);
    setShowModal(true);
  };

  return (
    <div className="overflow-hidden p-6 font-sans">
      <div className="bg-white overflow-hidden">

        {/* Header Section */}
        <div className="flex items-center justify-between p-4 bg-gray-50 border-b border-gray-200">
          <div className="text-gray-600 text-sm">
            Showing {transactions.length > 0 ? '1' : '0'} - {transactions.length} of {transactions.length} entries
            {selected.size > 0 && (
              <span className="ml-2 font-semibold text-gray-800">{selected.size} selected in this page</span>
            )}
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-600">Page 1</span>
            <span className="text-gray-400">of 1</span>
            <button className="p-1 rounded-full text-gray-400 hover:text-gray-600">
              <FiChevronsDown />
            </button>
            <button className="p-1 rounded-full text-gray-400 hover:text-gray-600 transform rotate-180">
              <FiChevronsDown />
            </button>
          </div>
        </div>

        {/* Action Bar */}
        <div className="p-4 flex flex-wrap items-center gap-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={isAllSelected}
              onChange={handleSelectAll}
              className="rounded text-indigo-600 focus:ring-indigo-500"
            />
            <span className="text-sm font-semibold text-gray-600">Select All</span>
          </div>
          <button
            onClick={handleDeleteSelected}
            disabled={selected.size === 0}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 ${selected.size > 0 ? 'bg-red-50 text-red-600' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}
          >
            <FiTrash /> Delete
          </button>
          <TableFilterDropdwon
            disabled={selected.size === 0}
            buttonContent={
              <>
                <HiArrowTurnUpRight /> Move or Copy
              </>
            }
            dropdownContent={({ setIsOpen }) => (
              <div className="py-1">
                <button
                  onClick={() => handleMoveEntries(setIsOpen)}
                  className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <HiArrowTurnUpRight /> Move Entries
                </button>
                <button
                  onClick={() => handleCopyEntries(setIsOpen)}
                  className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <MdContentCopy /> Copy Entries
                </button>
                <button
                  onClick={() => handleCopyOppositeEntries(setIsOpen)}
                  className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <FaPlusMinus className="transform -scale-x-100" /> Copy Opposite Entries
                </button>
              </div>
            )}
          />
          <TableFilterDropdwon
            disabled={selected.size === 0}
            buttonContent={
              <>
                <GoArrowSwitch className="2xl" /> Change Fields
              </>
            }
            dropdownContent={({ setIsOpen }) => (
              <div className="py-1">
                <button
                  onClick={() => handleMoveEntries(setIsOpen)}
                  className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <MdOutlineCategory /> Change Category
                </button>
                <button
                  onClick={() => handleCopyEntries(setIsOpen)}
                  className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <MdOutlinePayments /> Change Payment Mode
                </button>
                <button
                  onClick={() => handleCopyOppositeEntries(setIsOpen)}
                  className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <HiOutlineUsers className="transform -scale-x-100" /> Change Contact
                </button>
              </div>
            )}
          />
        </div>

        <table className="min-w-full divide-y divide-gray-100">
          <thead className="bg-gray-50">
            <tr className="text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
              <th className="p-4 w-10">
                <input
                  type="checkbox"
                  checked={isAllSelected}
                  onChange={handleSelectAll}
                  className="rounded text-indigo-600 focus:ring-indigo-500"
                />
              </th>
              <th className="p-4 whitespace-nowrap">Date & Time</th>
              <th className="p-4">Details</th>
              <th className="p-4">Category</th>
              <th className="p-4">Mode</th>
              <th className="p-4">Amount</th>
              <th className="p-4">Balance</th>
              <th className="p-4"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-sm">
            {transactions.map((transaction, index) => (
              <tr key={index} onClick={() => handleRowClick(transaction)} className="hover:bg-gray-50 transition-colors duration-150 cursor-pointer">
                <td className="p-4">
                  <input
                    type="checkbox"
                    checked={selected.has(index)}
                    onChange={() => handleCheckboxChange(index)}
                    className="rounded text-indigo-600 focus:ring-indigo-500"
                  />
                </td>
                <td className="p-4 whitespace-nowrap">
                  <div className="font-semibold text-gray-900">{transaction.date}</div>
                  <div className="text-gray-500 text-xs">{transaction.time}</div>
                </td>
                <td className="p-4 text-gray-700">
                  <div className="font-semibold text-gray-900">{transaction.contact}</div>
                  <div className="text-gray-500 text-xs">{transaction.contactType}</div>
                  <div className="text-gray-700">{transaction.details}</div>
                </td>
                <td className="p-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-indigo-100 text-indigo-800">
                    {transaction.category}
                  </span>
                </td>
                <td className="p-4 whitespace-nowrap text-gray-700">{transaction.mode}</td>
                <td className="p-4 whitespace-nowrap font-bold text-green-600">{transaction.amount}</td>
                <td className="p-4 whitespace-nowrap font-bold text-indigo-600">{transaction.balance}</td>
                <td className="p-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex items-center justify-end gap-2">
                    <button className="text-gray-400 hover:text-indigo-600 transition-colors duration-150 p-2 rounded-full hover:bg-gray-100">
                      <FiEdit />
                    </button>
                    <button className="text-gray-400 hover:text-red-600 transition-colors duration-150 p-2 rounded-full hover:bg-gray-100">
                      <FiTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {showModal && <EntryDetails isOpen={showModal} onClose={() => setShowModal(false)} data={selectedTransaction} />}
      </div>
    </div>
  );
};

export default TransactionTable;
