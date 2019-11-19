import React from "react";
import {
  CollectionItemContainer,
  Image,
  CollectionFooter,
  CustomButtonElement
} from "./collection-item.styles";
import { addItem } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <Image
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      ></Image>
      <CollectionFooter>
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </CollectionFooter>
      <CustomButtonElement
        className="custom-button"
        inverted
        onClick={() => addItem(item)}
      >
        ADD TO CART
      </CustomButtonElement>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
