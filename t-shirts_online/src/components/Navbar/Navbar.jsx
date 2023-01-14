import React from "react";
import classes from "../Navbar/Navbar.module.css";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className={classes.nav_container}>
      <div className={classes.cart}>
        <p>TeeRex Store</p>
      </div>
      <div className={classes.cart}>
        <Link className={classes.products_link} to="/products">
          Products
        </Link>
        <Link to="/cart">
          {/* <div className={classes.count}>1</div> */}
          <FiShoppingCart className={classes.cartIcons} size={"25px"} />
        </Link>
      </div>
    </div>
  );
};