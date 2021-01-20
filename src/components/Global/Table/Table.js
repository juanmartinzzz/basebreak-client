import React, { Fragment, useState } from "react";
import {
  Table as MuiTable,
  Typography,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
} from "@material-ui/core";
import Filters from "./Filters";
import TableTitle from "./TableTitle";

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
          <TableTitle
            title={title}
            headers={headers}
            expanded={expanded}
            expandable={expandable}
            setExpanded={setExpanded}
            titleVariant={titleVariant}
            childrenList={childrenList}
            filteredChildrenList={filteredChildrenList}
          />

          {filterable && expanded && (
            <Filters
              title={title}
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
