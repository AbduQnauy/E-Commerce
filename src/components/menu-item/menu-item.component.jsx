import React from "react";
// import "./menu-item.styles.scss";
import {
  MenuItemContainer,
  BackGroundImage,
  Content
} from "./menu-item.styles";
import { withRouter } from "react-router-dom";

const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => (
  <MenuItemContainer
    className={size}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <BackGroundImage
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <Content className="content">
      <h1>{title.toUpperCase()}</h1>
      <span>SHOP NOW</span>
    </Content>
  </MenuItemContainer>
);
export default withRouter(MenuItem);
