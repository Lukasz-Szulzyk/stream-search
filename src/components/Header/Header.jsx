import React from "react";
import "./Header.css";
import { AiOutlineSearch } from "react-icons/ai";

const Header = ({ handleInput, searchResult, search }) => {
  return (
    <header className="bg-gradient-to-b from-[#424242] to-black md:py-8 py-2 shadow-custom">
      <div className="container mx-auto flex flex-wrap justify-center items-center space-y-4 md:space-y-0 md:space-x-16 space-x-4 md:pl-0 pl-4 md:pr-0 pr-4">
        <div className="w-full md:w-auto md:max-w-[40%] md:pr-4 pr-0">
          <h1 className="text-3xl md:text-5xl font-bold text-white gradient-text tracking-tight">
            Stream Search
          </h1>
        </div>
        <div className="w-full md:flex-1 !ml-0 !mt-0 md:max-w-[60%]">
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
                className="absolute right-1 top-1/2 transform -translate-y-1/2 p-4 bg-slate-900 rounded-full text-black"
              >
                <AiOutlineSearch />
              </button>
            </div>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
