"use client"
import BreadCum from '@/components/Screen/Cashbook/BreadCum';
import FilterSection from '@/components/Screen/Cashbook/FilterSection';
import Pagination from '@/components/Screen/Cashbook/Pagination';
import SearchAndActionButton from '@/components/Screen/Cashbook/SearchAndActionButton';
import SummaryCards from '@/components/Screen/Cashbook/SummaryCards';
import TransactionTable from '@/components/Screen/Cashbook/TransactionTable';
import React, { useState } from 'react'

function CashbookPage() {
      const [transactions, setTransactions] = useState([
    {
      date: '17 Aug, 2025',
      time: '02:52 PM',
      details: '---',
      category: 'Cash',
      mode: 'Cash',
      bill: '---',
      amount: '100',
      balance: '100',
    },
  ]);

  const cashIn = 100;
  const cashOut = 0;
  const netBalance = 100;
  return (
     <div className="flex flex-col flex-1 overflow-y-auto  bg-white">
        <BreadCum/>
          <FilterSection />
          <SearchAndActionButton />
          <SummaryCards cashIn={cashIn} cashOut={cashOut} netBalance={netBalance} />
          <TransactionTable transactions={transactions} />
          <Pagination />
        </div>
  )
}

export default CashbookPage
