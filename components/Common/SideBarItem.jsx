import React from 'react'
import { IoMdArrowDropright } from 'react-icons/io';


const SidebarItem = ({ icon: Icon, text, href, name, activeDropdownName, onDropdownToggle, getNavLinkClass, children }) => {
  const isDropdown = !!children;
  const isDropdownOpen = activeDropdownName === name;
  const isActive = isDropdown ? false : getNavLinkClass(href) === 'active-link';

  const baseClasses = "flex items-center w-full px-4 py-2 rounded-lg text-gray-600 transition-colors focus:outline-none";
  const activeClasses = isActive ? 'active-link' : '';

  if (isDropdown) {
    return (
      <div>
        <button
          onClick={() => onDropdownToggle(name)}
          className={`${baseClasses} ${isDropdownOpen ? 'bg-gray-200' : 'hover:bg-gray-200'}`}
        >
          {Icon && <Icon className='sidebar_item_icon' />}
          <span>{text}</span>
          <IoMdArrowDropright
            className={`w-4 h-4 ml-auto text-gray-500 transform transition-transform duration-200 ${isDropdownOpen ? 'rotate-90' : 'rotate-0'}`}
          />
        </button>
        {isDropdownOpen && (
          <div className="ml-4 mt-1 space-y-1">
            {children}
          </div>
        )}
      </div>
    );
  }

  return (
    <NextLink href={href} className={`${baseClasses} hover:bg-gray-200 ${activeClasses}`}>
      {Icon && <Icon className='sidebar_item_icon' />}
      <span>{text}</span>
    </NextLink>
  );
};
export default SidebarItem