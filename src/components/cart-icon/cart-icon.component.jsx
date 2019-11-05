import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

// const mapStateToProps = ({ cart: { cartItems } }) => {
//   console.log("cart-icon is rendered");
//   return {
//     itemCount: cartItems.reduce(
//       (accum, cartItem) => accum + cartItem.quantity,
//       0
//     )
//   };
// };

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

const mapDisptchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});
export default connect(
  mapStateToProps,
  mapDisptchToProps
)(CartIcon);
