import React from "react";
import { Route, Routes } from "react-router-dom";
import { Products } from "../pages/Products/Products";
import { Cart } from "../pages/Cart/Cart";

export const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Products />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </>
  );
};
