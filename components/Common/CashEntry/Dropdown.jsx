import React from 'react'
import { BsFileExcel } from 'react-icons/bs';

const { FiPlayCircle, FiPlusCircle } = require("react-icons/fi");

const Dropdown = ({
    label,
    placeholder,
    searchTerm,
    setSearchTerm,
    showDropdown,
    setShowDropdown,
    filteredItems,
    handleSelect,
    addNewLabel,
    onAddNew,
    showImportButton,
    onImportBulk,
}) => (
    <div className="mb-4">
        <label className="block text-gray-700 text-sm font-medium mb-1">{label}</label>
        <div className="relative">
            <input
                type="text"
                className="w-full px-4 py-2 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={placeholder}
                value={searchTerm}
                onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setShowDropdown(true);
                }}
                onFocus={() => setShowDropdown(true)}
                onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
            />
            {showDropdown && (
                <div className="absolute z-10 p-3 w-full mt-1 bg-white border border-gray-200 rounded-sm shadow-lg ">
                    <div className='max-h-44 overflow-y-auto'>
                        {filteredItems.length > 0 ? (
                        filteredItems.map(item => (
                            <div
                                key={item.id}
                                className="px-4 py-2 text-gray-800 cursor-pointer hover:bg-gray-100"
                                onMouseDown={(e) => {
                                    e.preventDefault();
                                    handleSelect(item);
                                }}
                            >
                                {item.name}
                            </div>
                        ))
                    ) : (
                        <div className="px-4 py-2 text-gray-500">No {label.toLowerCase()} found.</div>
                    )}
                    </div>
                    <div className="border-t border-gray-200 mt-2 pt-2">
                        <button
                            className="flex items-center font-medium w-full px-4 py-2 text-sm text-blue-600 hover:bg-gray-100"
                            onMouseDown={() => onAddNew()}
                        >
                            <FiPlusCircle className="text-blue-600" /> {addNewLabel}
                        </button>
                        {showImportButton && (
                            <button
                                className="flex items-center w-full font-medium px-4 py-2 text-sm text-green-600 hover:bg-gray-100"
                                onMouseDown={() => onImportBulk()}
                            >
                                <BsFileExcel className="text-green-600" /> Import Bulk contacts from CSV
                            </button>
                        )}
                    </div>
                </div>
            )}
        </div>
    </div>
);

export default Dropdown