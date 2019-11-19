import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import { DirectoryMenu } from "./directory.styles";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectSections } from "../../redux/directory/directory.selectors";

const Directory = ({ sections }) => (
  <DirectoryMenu>
    {sections.map(({ id, ...otherProps }) => (
      <MenuItem key={id} {...otherProps} />
    ))}
  </DirectoryMenu>
);

const mapStateToProps = createStructuredSelector({
  sections: selectSections
});
export default connect(mapStateToProps)(Directory);
