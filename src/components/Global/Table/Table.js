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
import IconButton from "../IconButton";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Filters from "./Filters";

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
  filterable = true,
  titleVariant = "h2",
}) => {
  const childrenList = Array.isArray(children) ? children : [children];
  const [expanded, setExpanded] = useState(expand);
  const [limited, setLimited] = useState(limit);
  const [filter, setFilter] = useState("");
  const [exclude, setExclude] = useState("");

  const filteredChildrenList = childrenList.filter(({ props }) => {
    if (!props || !props.data) {
      return true;
    }

    const stringifiedProperties = props.filter
      .reduce((previous, property) => previous + "-" + props.data[property], "")
      .toLowerCase();
    return (
      stringifiedProperties.includes(filter.toLowerCase()) &&
      (exclude === "" || !stringifiedProperties.includes(exclude.toLowerCase()))
    );
  });

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

          {filterable && (
            <Filters
              filter={filter}
              setFilter={setFilter}
              exclude={exclude}
              setExclude={setExclude}
            />
          )}
        </TableHead>

        {expanded && (
          <TableBody>
            {filteredChildrenList
              .slice(0, limited ? rowsLimited : filteredChildrenList.length)
              .map((child) => child)}

            <LimitedToggleRow
              childrenList={filteredChildrenList}
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
