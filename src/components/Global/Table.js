import React, { useState } from "react";
import { Table as MuiTable, Typography, TableHead, TableRow, TableCell, TableBody, Grid } from "@material-ui/core";
import IconButton from "./IconButton";
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const Table = ({
  title, 
  headers, 
  children,
  expand = true, 
  expandable = true, 
  titleVariant = "h2", 
}) => {
  const childrenList = Array.isArray(children) ? children : [children];
  const [expanded, setExpanded] = useState(expand);

  return (
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
                  <IconButton Icon={expanded ? ExpandLess : ExpandMore} onClick={() => setExpanded(!expanded)} />
                </Grid>
              )}
            </Grid>
          </TableCell>
        </TableRow>
        
        {headers && (
          <TableRow>
            {headers.map(header => (
              <TableCell>
                {header}
              </TableCell>
            ))}
          </TableRow>
        )}
      </TableHead>
  
      {expanded && (
        <TableBody>
          {childrenList.map(child => child)}
        </TableBody>
      )}
    </MuiTable>
  );
}

export default Table;