import React from "react";
import { Grid, TableCell, TableRow, TextField } from "@material-ui/core";
import { RemoveCircleOutline, Search } from "@material-ui/icons";
import IconButton from "../IconButton";

const Filters = ({ filter, setFilter, exclude, setExclude }) => (
  <TableRow>
    <TableCell>
      <Grid container alignItems="center">
        <Grid item>
          <IconButton Icon={Search} />
        </Grid>
        <Grid item>
          <TextField
            size="small"
            value={filter}
            onChange={({ target }) => setFilter(target.value)}
          />
        </Grid>
        <Grid item>
          <IconButton Icon={RemoveCircleOutline} />
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
