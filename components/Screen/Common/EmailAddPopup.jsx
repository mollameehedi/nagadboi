import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { IoMdClose } from 'react-icons/io'

const EmailAddPopup = ({ isOpen, onClose }) => {
   if (!isOpen) return null;
  return (
     <div className="fixed inset-0 bg-gray-600/40 overflow-y-auto h-full w-full flex items-center justify-center z-50">
          <div className="relative p-8 bg-white w-full max-w-lg mx-auto rounded-sm shadow-lg">
            <div className="flex justify-between items-center pb-3">
              <h3 className="text-xl font-medium text-gray-700">Add Email Address</h3>
              <button onClick={onClose} className='border border-gray-200 rounded-sm p-2 cursor-pointer'>
                <IoMdClose />
              </button>
            </div>
            <div className="mt-2 space-y-4">
              <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-100 transition-colors">
                <FcGoogle className='text-xl mr-3'/>
                Continue With Google
              </button>
              <div className="relative flex justify-center items-center">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-gray-300"></span>
                </div>
                <div className="relative bg-white px-2 text-sm text-gray-500">Or</div>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Email</label>
                <input type="email" className="w-full px-4 py-2 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="e.g. username@example.com" />
              </div>
            </div>
            <div className="flex justify-end space-x-3 mt-6">
              <button onClick={onClose} className="px-6 py-2 text-gray-600 rounded-lg hover:bg-gray-200">Cancel</button>
              <button onClick={onClose} className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Send Verification OTP</button>
            </div>
          </div>
        </div>
  )
}

export default EmailAddPopup