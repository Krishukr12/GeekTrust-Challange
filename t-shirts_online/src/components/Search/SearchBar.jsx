import React from "react";
import classes from "../Search/SearchBar.module.css";
import { BsSearch } from "react-icons/bs";
import { FiFilter } from "react-icons/fi";
export const SearchBar = () => {
  return (
    <div className={classes.container}>
      <div className={classes.search_bar_container}>
        <input placeholder="Search Products.." type="text"></input>
        <button>
          <BsSearch />
        </button>
        <button className={classes.filter_icon}>
          <FiFilter />
        </button>
      </div>
    </div>
  );
};
