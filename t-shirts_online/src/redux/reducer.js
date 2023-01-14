import { GET_CARD_PRODUCTS, GET_PRODUCTS } from "./actionType";

export const Reducer = (state, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS: {
      return {
        ...state,
        products: payload,
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
