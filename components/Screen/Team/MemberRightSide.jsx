"use client"
import Card from '@/components/Common/Card'
import React, { useState } from 'react'
import { BsPersonCheck } from 'react-icons/bs'
import AddMemberModal from './AddMemberModal'

const MemberRightSide = () => {
    const [isAddMemberModalOpen, setIsAddMemberModalOpen] = useState(false);
  return (
     <div className=" col-span-3">
                    <Card className="space-y-4">
                        <h3 className="text-xs font-normal text-gray-400">Add your business partners or staffs to this business and manage cashflow together</h3>
                        <button
                            className="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center"
                             onClick={() => setIsAddMemberModalOpen(true)}
                        >
                            <BsPersonCheck className="w-5 h-5 mr-1" />
                            Add team member
                        </button>
                    </Card>
                    <AddMemberModal isOpen={isAddMemberModalOpen} 
              onClose={() => setIsAddMemberModalOpen(false)} />
                </div>
  )
}

export default MemberRightSide