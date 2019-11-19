import React from "react";
// import "./cart-dropdown.styles.scss";
import {
  CartDropDownContainer,
  CartItems,
  EmptyMessage
} from "./card-dropdown.styles";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropDownContainer>
    <CartItems>
      {cartItems.length ? (
        cartItems.map(item => <CartItem item={item} key={item.id} />)
      ) : (
        <EmptyMessage>Your cart is empty</EmptyMessage>
      )}
    </CartItems>
    <CustomButton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </CartDropDownContainer>
);

// const mapStateToProps = ({ cart: { cartItems } }) => {
//   console.log("cart-dropdown is rendered");
//   return {
//     cartItems
//   };
// };

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
