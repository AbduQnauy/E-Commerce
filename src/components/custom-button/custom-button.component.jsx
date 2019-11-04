import React from "react";
import "./custom-button.styles.scss";
const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProp }) => (
  <button
    className={` 
    ${isGoogleSignIn ? "google-sign-in" : ""}
    ${inverted ? "inverted" : ""}
      custom-button`}
    {...otherProp}
  >
    {children}
  </button>
);

export default CustomButton;
