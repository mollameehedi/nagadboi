
import {FaChevronDown} from 'react-icons/fa'

const FilterSection = () => (
  <div className="flex items-center justify-between gap-4 p-4 border-b">
    <div className="flex flex-wrap gap-2 text-sm text-gray-500">
      <div className="relative inline-block">
        <select className="appearance-none bg-white border border-gray-200 text-gray-700 py-1 pl-3 pr-8 rounded-sm leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
          <option>Duration: All Time</option>
          <option>Last 7 Days</option>
          <option>Last 30 Days</option>
          <option>This Month</option>
          <option>Custom Date</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <FaChevronDown />
        </div>
      </div>
      <div className="relative inline-block">
        <select className="appearance-none bg-white border border-gray-200 text-gray-700 py-1 pl-3 pr-8 rounded-sm leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
          <option>Types: All</option>
          <option>Cash In</option>
          <option>Cash Out</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <FaChevronDown />
        </div>
      </div>
      <div className="relative inline-block">
        <select className="appearance-none bg-white border border-gray-200 text-gray-700 py-1 pl-3 pr-8 rounded-sm leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
          <option>Contacts: All</option>
          <option>Contact A</option>
          <option>Contact B</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <FaChevronDown />
        </div>
      </div>
      <div className="relative inline-block">
        <select className="appearance-none bg-white border border-gray-200 text-gray-700 py-1 pl-3 pr-8 rounded-sm leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
          <option>Members: All</option>
          <option>Member A</option>
          <option>Member B</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <FaChevronDown />
        </div>
      </div>
      <div className="relative inline-block">
        <select className="appearance-none bg-white border border-gray-200 text-gray-700 py-1 pl-3 pr-8 rounded-sm leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
          <option>Payment Modes: All</option>
          <option>Cash</option>
          <option>Card</option>
          <option>Online</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <FaChevronDown />
        </div>
      </div>
      <div className="relative inline-block">
        <select className="appearance-none bg-white border border-gray-200 text-gray-700 py-1 pl-3 pr-8 rounded-sm leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
          <option>Categories: All</option>
          <option>Category A</option>
          <option>Category B</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <FaChevronDown />
        </div>
      </div>
    </div>
  </div>
);
export default FilterSection