import { IconButton, TableCell, TableRow, TextField } from "@material-ui/core";
import { Loupe } from "@material-ui/icons";
import React from "react";

const Search = () => (
  <TableRow>
    <TableCell>
      <IconButton>
        <Loupe />
      </IconButton>
      <TextField />
    </TableCell>
  </TableRow>
);

export default Search;
