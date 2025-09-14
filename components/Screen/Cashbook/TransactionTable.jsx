"use client"
import {FaTrashAlt, FaPencilAlt } from 'react-icons/fa'

const TransactionTable = ({ transactions }) => (
  <div className="overflow-x-auto p-4">
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
            <th className="p-4 whitespace-nowrap">Date & Time</th>
            <th className="p-4">Details</th>
            <th className="p-4">Category</th>
            <th className="p-4">Mode</th>
            <th className="p-4">Bill</th>
            <th className="p-4">Amount</th>
            <th className="p-4">Balance</th>
            <th className="p-4"></th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 text-sm">
          {transactions.map((transaction, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="p-4 whitespace-nowrap">
                <div className="text-gray-900">{transaction.date}</div>
                <div className="text-gray-500">{transaction.time}</div>
                <div className="text-xs text-gray-400">by You</div>
              </td>
              <td className="p-4 whitespace-nowrap text-gray-500">{transaction.details}</td>
              <td className="p-4 whitespace-nowrap text-gray-500">{transaction.category}</td>
              <td className="p-4 whitespace-nowrap text-gray-500">{transaction.mode}</td>
              <td className="p-4 whitespace-nowrap text-gray-500">{transaction.bill}</td>
              <td className="p-4 whitespace-nowrap font-medium text-green-600">{transaction.amount}</td>
              <td className="p-4 whitespace-nowrap font-medium text-indigo-600">{transaction.balance}</td>
              <td className="p-4 whitespace-nowrap text-right text-sm font-medium">
                <div className="flex items-center gap-2">
                  <button className="text-gray-400 hover:text-indigo-600">
                    <FaPencilAlt className="w-4 h-4" />
                  </button>
                  <button className="text-gray-400 hover:text-red-600">
                    <FaTrashAlt className="w-4 h-4" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default TransactionTable