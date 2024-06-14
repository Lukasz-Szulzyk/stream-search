import React from 'react';
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = ({handleInput, searchResult, state}) => {
  return (
    <div className="container mx-auto flex justify-center items-center">
        <form onSubmit={searchResult} className="w-[500px] relative mt-5">
            <div className="relative">
                <input 
                    type="search" 
                    placeholder="movie" 
                    className="w-full p-4 rounded-full text-black"
                    value={state.search}
                    onChange={handleInput}
                />
                <button onClick={searchResult}
                    className="absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-slate-900 rounded-full text-black">
                        <AiOutlineSearch />
                </button>
            </div>
        </form>

    </div>
  )
}

export default SearchBar;