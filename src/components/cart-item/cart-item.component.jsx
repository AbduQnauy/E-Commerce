import React from "react";
import {
  CartItemContainer,
  ImageElement,
  ItemDetails
} from "./cart-item.styles";
const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <ImageElement src={imageUrl} alt="item" />
    <ItemDetails>
      <span className="name">{name}</span>
      <span>
        {quantity} x {price}$
      </span>
    </ItemDetails>
  </CartItemContainer>
);

export default CartItem;
