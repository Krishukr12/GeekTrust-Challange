import {
  ADDED_IN_CARD_SUCCESS,
  GET_PRODUCTS,
  ADDED_IN_CARD_FAIL,
  GET_CARD_PRODUCTS,
} from "./actionType";
// Add to Card ACTION
export const addToCart = (data, arr) => {
  let filter = arr.filter((item) => item.id === data.id);
  if (filter.length <= 0) {
    arr.push(data);
    localStorage.setItem("cart", JSON.stringify(arr));
    return {
      type: ADDED_IN_CARD_SUCCESS,
      payload: arr.length,
    };
  }
  alert("Item Already Exist");
  return {
    type: ADDED_IN_CARD_FAIL,
  };
};

// GET PRODUCTS ACTION
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

//GET CART PRODUCTS ACTION

export const getCartProducts = (data) => {
  return {
    type: GET_CARD_PRODUCTS,
    payload: data,
  };
};
