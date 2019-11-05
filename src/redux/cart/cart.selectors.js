import { createSelector } from "reselect";

const selectCart = state => state.cart;

const selectCartItems0 = createSelector(
  selectCart,
  cart => cart.cartItems
);

export const selectCartItems = createSelector(
  [selectCartItems0],
  cartItems => cartItems
);

const selectCartHidden0 = createSelector(
  selectCart,
  cart => cart.hidden
);

export const selectCartHidden = createSelector(
  [selectCartHidden0],
  hidden => hidden
);

// TUTORIAL CODE 2
// export const selectCartItems = createSelector(
//   [selectCartItems0],
//   cartItems => {
//     console.log(new Date().toISOString());
//     return cartItems;
//   }
// );

// TUTORIAL CODE 1
// let counter = 0;
// export const selectCartItems2 = createSelector(
//   [state => state.cart.cartItems],
//   cartItems => {
//     console.log(counter);
//     counter++;
//     return cartItems;
//   }
// );

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce((accum, cartItem) => accum + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector(
  selectCartItems0,
  cartItems =>
    cartItems.reduce(
      (accum, cartItem) => cartItem.quantity * cartItem.price + accum,
      0
    )
);
