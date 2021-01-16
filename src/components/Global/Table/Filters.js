import React from "react";
import {
  Grid,
  IconButton,
  TableCell,
  TableRow,
  TextField,
} from "@material-ui/core";
import { RemoveCircleOutline, Search } from "@material-ui/icons";

const Filters = ({ filter, setFilter, exclude, setExclude }) => (
  <TableRow>
    <TableCell>
      <Grid container alignItems="center">
        <Grid item>
          <IconButton>
            <Search />
          </IconButton>
        </Grid>
        <Grid item>
          <TextField
            size="small"
            value={filter}
            onChange={({ target }) => setFilter(target.value)}
          />
        </Grid>
        <Grid item>
          <IconButton>
            <RemoveCircleOutline />
          </IconButton>
        </Grid>
        <Grid item>
          <TextField
            size="small"
            value={exclude}
            onChange={({ target }) => setExclude(target.value)}
          />
        </Grid>
      </Grid>
    </TableCell>
  </TableRow>
);

export default Filters;
