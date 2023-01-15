import {
  ADDED_IN_CARD_SUCCESS,
  DELETE_CART_PRODUCT,
  GET_CARD_PRODUCTS,
  GET_PRODUCTS,
  SEARCH_PRODUCTS,
} from "./actionType";

export const Reducer = (state, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS: {
      return {
        ...state,
        products: payload,
      };
    }
    case ADDED_IN_CARD_SUCCESS: {
      return {
        ...state,
        cartProductsCount: payload,
      };
    }
    case SEARCH_PRODUCTS: {
      return {
        ...state,
        searchProducts: payload,
      };
    }
    case DELETE_CART_PRODUCT: {
      return {
        ...state,
        cartProducts: payload,
        cartProductsCount: state.cartProductsCount - 1,
      };
    }
    case GET_CARD_PRODUCTS: {
      return {
        ...state,
        cartProducts: payload,
      };
    }
    default: {
      return state;
    }
  }
};
