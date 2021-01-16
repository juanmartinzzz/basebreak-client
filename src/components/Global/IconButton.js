import React from "react";
import { IconButton as MuiIconButton } from "@material-ui/core";

const IconButton = ({ color = "primary", onClick, Icon }) => (
  <MuiIconButton color={color} size="small" onClick={onClick}>
    <Icon />
  </MuiIconButton>
);

export default IconButton;
