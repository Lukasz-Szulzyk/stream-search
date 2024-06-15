import React from 'react';
import './Header.css';
import { AiOutlineSearch } from "react-icons/ai";

const Header = ({ handleInput, searchResult, search }) => {
  return (
    <header className="bg-gradient-to-b from-[#424242] to-black py-8 shadow-custom">
      <div className="container mx-auto flex justify-center items-center space-x-16">
        <div className="ml-4 md:ml-0">
          <h1 className="md:text-5xl text-3xl font-bold text-white shadow gradient-text tracking-tight">
            Stream Search
          </h1>
        </div>
        <div className="flex-1">
          <form onSubmit={searchResult} className="relative">
            <div className="relative">
              <input 
                type="search" 
                placeholder="Movie name" 
                className="w-full p-4 rounded-xl text-black input-gradient"
                value={search}
                onChange={handleInput}
              />
              <button 
                type="submit"
                className="absolute right-1 top-1/2 transform -translate-y-1/2 p-4 bg-slate-900 rounded-full text-black">
                <AiOutlineSearch />
              </button>
            </div>
          </form>
        </div>
      </div>
    </header>
  );
}

export default Header;
