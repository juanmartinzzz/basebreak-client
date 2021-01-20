import React from "react";
import { Chip, Grid, TableCell, TableRow, TextField } from "@material-ui/core";
import { RemoveCircleOutline, Search } from "@material-ui/icons";
import IconButton from "../IconButton";
import { getLocalStorageItemV2 } from "../../../services/localStorage/localStorage";

const savedFilters = getLocalStorageItemV2({
  name: "savedFilters",
  defaultValue: {
    ["Tracked pairs"]: { filters: ["up"], excludes: ["leverage"] },
  },
});

const Filters = ({ title, filter, setFilter, exclude, setExclude }) => (
  <TableRow>
    <TableCell>
      <Grid container alignItems="center" spacing={1}>
        <Grid item xs={0} align="right">
          <IconButton Icon={Search} />
        </Grid>
        <Grid item xs={2}>
          <TextField
            size="small"
            value={filter}
            onChange={({ target }) => setFilter(target.value)}
          />
        </Grid>
        <Grid item xs={1}>
          {savedFilters[title].filters.map((savedFilter) => (
            <Chip
              size="small"
              label={savedFilter}
              onClick={() => setFilter(savedFilter)}
            />
          ))}
        </Grid>

        <Grid item xs={0} align="right">
          <IconButton Icon={RemoveCircleOutline} />
        </Grid>
        <Grid item xs={2}>
          <TextField
            size="small"
            value={exclude}
            onChange={({ target }) => setExclude(target.value)}
          />
        </Grid>
        <Grid item xs={1}>
          {savedFilters[title].excludes.map((savedExclude) => (
            <Chip
              size="small"
              label={savedExclude}
              onClick={() => setExclude(savedExclude)}
            />
          ))}
        </Grid>
      </Grid>
    </TableCell>
  </TableRow>
);

export default Filters;
