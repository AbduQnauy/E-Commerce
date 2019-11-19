import React from "react";
// import "./form-input.styles.scss";
import { Group, FormInputElement, FormInputLabel } from "./form-input.styles";
const FormInput = ({ handleChange, label, ...otherProps }) => (
  <Group>
    <FormInputElement onChange={handleChange} {...otherProps} />
    {label ? (
      <FormInputLabel className={otherProps.value.length ? "shrink" : ""}>
        {label}
      </FormInputLabel>
    ) : null}
  </Group>
);

export default FormInput;
