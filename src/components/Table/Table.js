import React from "react";
import { Table as MuiTable, Typography, TableHead, TableRow, TableCell, TableBody } from "@material-ui/core";

const Table = ({title, headers, children}) => {
  const childrenList = Array.isArray(children) ? children : [children];

  return (
    <MuiTable size="small">
      <TableHead>
        <TableRow>
          <TableCell colSpan={99}>
            <Typography variant="h2">{title}</Typography>
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
  
      <TableBody>
        {childrenList.map(child => child)}
      </TableBody>
    </MuiTable>
  );
}

export default Table;