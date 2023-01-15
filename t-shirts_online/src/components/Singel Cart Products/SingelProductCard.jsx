import React from "react";
import classes from "../Singel Cart Products/SingelProductCard.module.css";
import { useDispatch } from "react-redux";
import { DELETE_CART_PRODUCT } from "../../redux/actionType";
export const SingelProductCard = ({ data }) => {
  const dispatch = useDispatch();
  const handleDelete = async () => {
    let arr = await JSON.parse(localStorage.getItem("cart"));
    let afterDeleteData = arr.filter((item) => item.id !== data.id);
    localStorage.setItem("cart", JSON.stringify(afterDeleteData));
    dispatch({ type: DELETE_CART_PRODUCT, payload: afterDeleteData });
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
      <select className={classes.delete_button}>
        <option>Qty: 1</option>
        <option>Qty: 2</option>
        <option>Qty: 3</option>
        <option>Qty: 4</option>
        <option>Qty: 5</option>
        <option>Qty: 6</option>
        <option>Qty: 7</option>
        <option>Qty: 8</option>
        <option>Qty: 9</option>
        <option>Qty: 10</option>
      </select>
      <button onClick={handleDelete} className={classes.delete_button}>
        Delete
      </button>
    </div>
  );
};
