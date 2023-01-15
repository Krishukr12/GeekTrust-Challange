import React, { useEffect, useRef, useState } from "react";
import classes from "../Singel Cart Products/SingelProductCard.module.css";
import { useDispatch } from "react-redux";
import {
  DELETE_CART_PRODUCT,
  TOTAL_CART_PRICE_DEC,
  TOTAL_CART_PRICE_INC,
} from "../../redux/actionType";
export const SingelProductCard = ({ data }) => {
  const dispatch = useDispatch();
  const [productCount, setProductCount] = useState(1);
  const price = data.price * productCount;

  useEffect(() => {
    dispatch({ type: TOTAL_CART_PRICE_INC, payload: price });
  }, [productCount]);

  const handleDelete = async () => {
    let arr = await JSON.parse(localStorage.getItem("cart"));
    let afterDeleteData = arr.filter((item) => item.id !== data.id);
    localStorage.setItem("cart", JSON.stringify(afterDeleteData));
    dispatch({ type: DELETE_CART_PRODUCT, payload: afterDeleteData });
    dispatch({ type: TOTAL_CART_PRICE_DEC, payload: data.price });
  };

  const handleQtyChange = (e) => {
    if (e.target.value > data.quantity) {
      return alert(
        `Only ${data.quantity} items available You can't order more then that`
      );
    }
    setProductCount(e.target.value);
  };
  return (
    <div className={classes.main_container}>
      <img
        className={classes.product_image}
        alt="Product_image"
        src={data.imageURL}
      ></img>
      <div>
        <p>{data.name}</p>
        <p>{data.price} ₹</p>
      </div>
      <select onChange={handleQtyChange} className={classes.delete_button}>
        <option value="1">Qty: 1</option>
        <option value="2">Qty: 2</option>
        <option value="3">Qty: 3</option>
        <option value="4">Qty: 4</option>
        <option value="5">Qty: 5</option>
        <option value="6">Qty: 6</option>
        <option value="7">Qty: 7</option>
        <option value="8">Qty: 8</option>
        <option value="9">Qty: 9</option>
        <option value="10">Qty: 10</option>
      </select>
      <button onClick={handleDelete} className={classes.delete_button}>
        Delete
      </button>
    </div>
  );
};
