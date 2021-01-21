import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
} from "@material-ui/core";

const Select = ({ name, label, value, options = [], onChange }) => (
  <FormControl fullWidth size="small" variant="outlined">
    <InputLabel>{label ? label : name}</InputLabel>
    <MuiSelect value={value} onChange={onChange}>
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </MuiSelect>
  </FormControl>
);

export default Select;
