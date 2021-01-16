import React from "react";
import { TextField as MuiTextField, Tooltip } from "@material-ui/core";

const TextField = (props) => (
  <Tooltip title={props.info}>
    <MuiTextField
      fullWidth
      {...props} 
      size="small"
      variant="outlined"
    />
  </Tooltip>
);

export default TextField;