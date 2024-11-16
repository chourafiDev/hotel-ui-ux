import { SearchIcon } from "@/lib/assets";
import React from "react";

const Search = () => {
  return (
    <div className="lg:flex hidden items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2">
      <input
        placeholder="Search destination..."
        className="outline-none bg-transparent w-64 text-white placeholder:text-white/70 text-sm font-medium pr-2"
      />
      <button>
        <SearchIcon className="text-white size-5" />
      </button>
    </div>
  );
};

export default Search;
