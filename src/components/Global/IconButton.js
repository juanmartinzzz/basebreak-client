import React from "react";
import { IconButton as MuiIconButton } from "@material-ui/core";

const IconButton = ({ color = "primary", onClick, Icon, disabled }) => (
  <MuiIconButton color={color} size="small" onClick={onClick} disabled={disabled}>
    <Icon />
  </MuiIconButton>
);

export default IconButton;
