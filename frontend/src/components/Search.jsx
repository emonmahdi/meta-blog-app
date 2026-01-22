import React, { useContext, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { BlogContext } from "../context/BlogContext";

const Search = () => {
  const { searchTerm, setSearchTerm } = useContext(BlogContext);

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    setSearchTerm(inputValue);
  };

  console.log(searchTerm);

  return (
    <div className="relative">
      <input
        type="text"
        onChange={handleInputChange}
        className="bg-[#F4F4F5] px-4 py-2 pl-3 focus:outline-none rounded-full"
        placeholder="Search"
      />
      <button>
        <FaSearch
          onClick={handleSearch}
          className="absolute right-3 top-2.5 hover:text-secondary cursor-pointer"
        />
      </button>
    </div>
  );
};

export default Search;
