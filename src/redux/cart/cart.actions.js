import CartActioTypes from "./cart.types";

export const toggleCartHidden = () => ({
  type: CartActioTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
  type: CartActioTypes.ADD_ITEM,
  payload: item
});
