import React, { Fragment, useState } from "react";
import {
  Table as MuiTable,
  Typography,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Grid,
  Box,
} from "@material-ui/core";
import IconButton from "./IconButton";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

const rowsLimited = 10;

const LimitedToggleRow = ({ childrenList, limited, setLimited }) => {
  if (childrenList.length <= rowsLimited) {
    return null;
  }

  return (
    <TableRow>
      <TableCell onClick={() => setLimited(!limited)}>
        <Typography align="center">
          {limited ? "show all" : `show first ${rowsLimited}`}
        </Typography>
      </TableCell>
    </TableRow>
  );
};

const Table = ({
  title,
  headers,
  children,
  limit = true,
  expand = true,
  expandable = true,
  titleVariant = "h2",
}) => {
  const childrenList = Array.isArray(children) ? children : [children];
  const [expanded, setExpanded] = useState(expand);
  const [limited, setLimited] = useState(limit);

  return (
    <Fragment>
      <MuiTable size="small">
        <TableHead>
          <TableRow>
            <TableCell colSpan={99}>
              <Grid container alignItems="center" justify="space-between">
                <Grid item>
                  <Typography variant={titleVariant}>{title}</Typography>
                </Grid>

                {expandable && (
                  <Grid item xs={1}>
                    <IconButton
                      Icon={expanded ? ExpandLess : ExpandMore}
                      onClick={() => setExpanded(!expanded)}
                    />
                  </Grid>
                )}
              </Grid>
            </TableCell>
          </TableRow>

          {headers && (
            <TableRow>
              {headers.map((header) => (
                <TableCell>{header}</TableCell>
              ))}
            </TableRow>
          )}
        </TableHead>

        {expanded && (
          <TableBody>
            {childrenList
              .slice(0, limited ? rowsLimited : childrenList.length)
              .map((child) => child)}

            <LimitedToggleRow
              childrenList={childrenList}
              limited={limited}
              setLimited={setLimited}
            />
          </TableBody>
        )}
      </MuiTable>

      <Box p={1} />
    </Fragment>
  );
};

export default Table;
