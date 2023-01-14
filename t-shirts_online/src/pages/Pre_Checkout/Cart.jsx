import React, { useEffect } from "react";
import classes from "../Pre_Checkout/Cart.module.css";
import { SingelProductCard } from "../../components/Singel Cart Products/SingelProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getCartProducts } from "../../redux/action";
export const Cart = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cartProducts);
  useEffect(() => {
    dispatch(getCartProducts());
  });

  return (
    <div className={classes.main_container}>
      <div className={classes.title}>
        <p>Shopping Cart</p>
      </div>
      <div className={classes.cart_products_container}>
        {cartProducts.length
          ? cartProducts.map((item) => (
              <SingelProductCard data={item} key={item.id} />
            ))
          : null}
      </div>
      <div className={classes.total_amount}>
        <p>Total Amount : 20</p>
      </div>
    </div>
  );
};