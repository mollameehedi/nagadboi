import React from 'react'

const LeftModal = ({ isOpen, children}) => {
  
  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 bg-gray-600/40 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className={`fixed top-0 right-0 h-full flex justify-between flex-col w-full max-w-xl bg-white shadow-lg transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      {children}
      </div>
    </div>
  );
};

export default LeftModal