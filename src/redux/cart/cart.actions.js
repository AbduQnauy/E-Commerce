import CartActioTypes from "./cart.types";

export const toggleCartHidden = () => ({
  type: CartActioTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
  type: CartActioTypes.ADD_ITEM,
  payload: item
});

export const removeItem = item => ({
  type: CartActioTypes.REMOVE_ITEM,
  payload: item
});

export const clearItemFromCart = item => ({
  type: CartActioTypes.CLEAR_ITEM_FROM_CART,
  payload: item
});
