import React from "react";
import { Paper, TableRow, TableCell } from "@material-ui/core";
import Table from "../Table/Table";
import Symbol from "./Symbol";

const Symbols = ({ storeAndActions }) => (
  <Paper>
    <Table title="Symbols">
      {storeAndActions.store.exchangeInfo.symbols.map(symbol => (
        <TableRow key={symbol.symbol}>
          <TableCell>
            <Symbol symbol={symbol} storeAndActions={storeAndActions} />
          </TableCell>
        </TableRow>
      ))}
    </Table>
  </Paper>
);

export default Symbols;