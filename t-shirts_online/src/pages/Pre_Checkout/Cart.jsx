import React, { useEffect } from "react";
import classes from "../Pre_Checkout/Cart.module.css";
import { SingelProductCard } from "../../components/Singel Cart Products/SingelProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getCartProducts } from "../../redux/action";
import { ADDED_IN_CARD_SUCCESS } from "../../redux/actionType";
export const Cart = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cartProducts);
  const totolCartPrice = useSelector((state) => state.totolCartPrice);

  useEffect(() => {
    const getInitialProducts = async () => {
      let intialProducts =
        (await JSON.parse(localStorage.getItem("cart"))) || [];
      return dispatch(getCartProducts(intialProducts));
    };

    const setIntialCartCount = async () => {
      let intilCartProducts =
        (await JSON.parse(localStorage.getItem("cart"))) || [];
      dispatch({
        type: ADDED_IN_CARD_SUCCESS,
        payload: intilCartProducts.length,
      });
    };
    getInitialProducts();
    setIntialCartCount();
  }, []);

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
        <p>Total Amount : {totolCartPrice} ₹</p>
      </div>
    </div>
  );
};
