import Header from '@/components/layout/Header'
import Sidebar from '@/components/layout/Sidebar'
import React from 'react'

const layout = ({children}) => {
  return (
    <div className="bg-gray-100 min-h-screen font-sans antialiased flex">
      {/* Left Sidebar */}
    <Sidebar/>
      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <Header/>
        {children}
      </main>
    </div>
  )
}

export default layout