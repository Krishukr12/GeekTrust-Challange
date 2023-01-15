import React, { useState } from "react";
import classes from "../Search/SearchBar.module.css";
import { BsSearch } from "react-icons/bs";
import { FiFilter } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { SEARCH_PRODUCTS } from "../../redux/actionType";
export const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const products = useSelector((state) => state.products);

  //Change Input Handler
  const handleInputChange = (e) => {
    if (e.target.value === "") {
      dispatch({ type: SEARCH_PRODUCTS, payload: [] });
    }
    setSearchTerm(e.target.value);
  };

  // STRICT CHECKING FUNCTION FOR SEARCH
  const checking = (item, searchTermArray) => {
    let checkKey = [];
    for (var key in item) {
      if (key === "name" || key === "type" || key === "color") {
        checkKey.push(item[key].toLowerCase());
      }
    }
    for (let i = 0; i < searchTermArray.length; i++) {
      if (!checkKey.includes(searchTermArray[i].toLowerCase())) {
        return false;
      }
    }
    return true;
  };

  // On Search Handle
  const handleSearch = () => {
    const searchTermArray = searchTerm.split(" ");
    let arr = products.filter((item) => checking(item, searchTermArray));
    if (arr.length > 0) {
      dispatch({ type: SEARCH_PRODUCTS, payload: arr });
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.search_bar_container}>
        <input
          onChange={handleInputChange}
          placeholder="Search Products.."
          type="text"
          value={searchTerm}
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
