import {
  ADDED_IN_CARD_SUCCESS,
  GET_PRODUCTS,
  ADDED_IN_CARD_FAIL,
  GET_CARD_PRODUCTS,
} from "./actionType";

// Add to Card Function
let arr = JSON.parse(localStorage.getItem("cart")) || [];
export const addToCart = (data) => {
  let filter = arr.filter((item) => item.id === data.id);
  if (filter.length <= 0) {
    arr.push(data);
    localStorage.setItem("cart", JSON.stringify(arr));
    alert("Item Added to Cart");
    return {
      type: ADDED_IN_CARD_SUCCESS,
    };
  }
  alert("Item Already Exist");
  return {
    type: ADDED_IN_CARD_FAIL,
  };
};

// GET PRODUCTS FUNCTION
export const getProducts = async (dispatch) => {
  await fetch(
    "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json",
    {
      method: "GET", // or 'PUT'
    }
  )
    .then((response) => response.json())
    .then((data) => {
      dispatch({
        type: GET_PRODUCTS,
        payload: data,
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

//GET CART PRODUCTS FUNCTION

export const getCartProducts = () => {
  return {
    type: GET_CARD_PRODUCTS,
    payload: arr,
  };
};
