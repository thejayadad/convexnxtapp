'use client';
import React from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchBar = () => {
  return (
    <div className="w-full lg:max-w-md py-2">
      <form
        action="/search"
        className="relative flex items-center border w-full lg:p-1 rounded-full border-purple-200 bg-gray-200 text-gray-700 transition-all duration-200 outline-none focus:outline-none focus:ring-2 focus:ring-purple-600"
      >
        {/* Search Icon */}
        <FiSearch className="absolute left-4 text-gray-600 w-5 h-5" />

        {/* Input Field */}
        <input
          type="text"
          name="search"
          placeholder="Search..."
          className="w-full py-2 pl-12 pr-4 text-sm text-gray-600 bg-transparent outline-none border-none"
        />

        {/* Search Button */}
        <button
          type="submit"
          className="block px-4 py-2 lg:px-6 text-white bg-purple-600 rounded-full hover:bg-purple-700 transition-all duration-200"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
