"use client"
import Link from 'next/link'
import React from 'react'

const BusinessSettingSidebar = ({children}) => {
  return (
    <>
     <div className="bg-gray-50 min-h-screen font-sans antialiased flex">
         <aside className="w-1/5 border-r border-gray-200 p-4 space-y-2">
        <nav className="space-y-1 text-sm font-medium text-gray-600">
          <Link href="/dashboard/business-settings/setting" className="p-4 rounded-lg bg-primary/10 text-gray-900 font-semibold mb-4  block">
            <div className="font-bold">Business Profile</div>
            <div className="text-xs text-gray-500">Edit business details</div>
          </Link>
          <Link href="/dashboard/business-settings/leave" className="p-4 rounded-lg hover:bg-gray-100  block">
            <div className="font-bold">Settings</div>
            <div className="text-xs text-gray-500">Leave Business</div>
          </Link>
        </nav>
      </aside>
      {children}
       </div>
    </>
  )
}

export default BusinessSettingSidebar