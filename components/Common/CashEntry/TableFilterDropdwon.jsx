import React, { useEffect, useRef, useState } from 'react'
import { HiArrowTurnUpRight } from 'react-icons/hi2';
import { IoMdArrowDropdown } from 'react-icons/io';

const TableFilterDropdwon = ({ buttonContent, dropdownContent, disabled = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={disabled}
        className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 ${
          disabled ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }`}
      >
        {buttonContent}
        <IoMdArrowDropdown className="w-4 h-4" />
      </button>
      {isOpen && (
        <div className="absolute z-10 top-full mt-2 w-56 bg-white rounded-lg shadow-sm border-gray-200  focus:outline-none">
          {dropdownContent({ setIsOpen })}
        </div>
      )}
    </div>
  );
};

export default TableFilterDropdwon