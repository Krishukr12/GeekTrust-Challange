import React, { useState } from "react";
import classes from "../Search/SearchBar.module.css";
import { BsSearch } from "react-icons/bs";
import { FiFilter } from "react-icons/fi";
export const SearchBar = () => {
  const [input, setInput] = useState("");
  //Change Input Handler
  const handleInputChange = (e) => {
    let Input = e.target.value;
    setInput(Input);
  };

  // On Search Handle
  const handleSearch = () => {
    alert(input);
    setInput("");
  };
  return (
    <div className={classes.container}>
      <div className={classes.search_bar_container}>
        <input
          onChange={handleInputChange}
          placeholder="Search Products.."
          type="text"
          value={input}
        ></input>
        <button onClick={handleSearch}>
          <BsSearch />
        </button>
        <button className={classes.filter_icon}>
          <FiFilter />
        </button>
      </div>
    </div>
  );
};
