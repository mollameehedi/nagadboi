"use client"
import Link from 'next/link'
import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'

const TeamItem = ({ name,color,initials,contact,role,index }) => {
  return (
    <Link href={`/dashboard/team/${name}`} className=" p-2 border-b-1 border-gray-200 flex items-center justify-between group">
                                    <div className="flex items-center space-x-4">
                                        <span className={`h-10 w-10 flex-shrink-0 flex items-center justify-center rounded-full ${color} font-bold`}>{initials}</span>
                                        <div>
                                            <h4 className="text-lg font-medium text-gray-900">{name}</h4>
                                            <p className="text-gray-500 text-sm">{contact}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <span className={`text-sm font-bold py-1 px-3 rounded-full ${role === 'Partner' ? 'text-orange-600 bg-orange-100' : 'text-green-600 bg-green-100'}`}>{role}</span>
                                        <span className="text-gray-400 hover:text-blue-600 w-6 h-6">
                                            <MdKeyboardArrowRight />
                                        </span>
                                    </div>
                                </Link>
  )
}

export default TeamItem