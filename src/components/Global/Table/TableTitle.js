import React from "react";
import { Grid, TableCell, TableRow, Typography } from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import Numerical from "../Numerical";
import IconButton from "../IconButton";

const TableTitle = ({
  title,
  headers,
  expanded,
  expandable,
  setExpanded,
  titleVariant,
  childrenList,
  filteredChildrenList,
}) => (
  <TableRow>
    <TableCell colSpan={99}>
      <Grid container alignItems="center">
        <Grid item xs={9}>
          <Typography variant={titleVariant}>{title}</Typography>
        </Grid>

        <Grid item xs={2}>
          <Typography variant="h5" align="right">
            <Numerical
              value={
                (filteredChildrenList.length !== childrenList.length &&
                  `${filteredChildrenList.length} of `) + childrenList.length
              }
            />
          </Typography>
        </Grid>

        <Grid item xs={1} align="right">
          {expandable && (
            <IconButton
              Icon={expanded ? ExpandLess : ExpandMore}
              onClick={() => setExpanded(!expanded)}
            />
          )}
        </Grid>
      </Grid>
    </TableCell>

    {headers && (
      <TableRow>
        {headers.map((header) => (
          <TableCell>{header}</TableCell>
        ))}
      </TableRow>
    )}
  </TableRow>
);

export default TableTitle;
