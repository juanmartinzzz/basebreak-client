import React from "react";
import { Paper, TableRow, TableCell, Grid } from "@material-ui/core";
import Table from "../Global/Table";
import Symbol from "./Symbol";

const ExchangeInfo = ({ storeAndActions }) => (
  <Grid item xs={12}>
    <Paper>
      <Table title="All Pairs in the Exchange" expand={false}>
        {Object.keys(storeAndActions.store.exchangeInfo.symbols).map(key => (
          <TableRow key={key}>
            <TableCell>
              <Symbol symbol={storeAndActions.store.exchangeInfo.symbols[key]} storeAndActions={storeAndActions} />
            </TableCell>
          </TableRow>
        ))}
      </Table>
    </Paper>
  </Grid>
);

export default ExchangeInfo;