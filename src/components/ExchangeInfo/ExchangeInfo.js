import React from "react";
import { Paper, TableRow, TableCell, Grid } from "@material-ui/core";
import Table from "../Global/Table/Table";
import Symbol from "./Symbol";
import { getScannedSymbols } from "../../utils/assets";

const orderSymbols = ({ exchangeInfo, scanning, priceCracks }) =>
  getScannedSymbols({ symbols: exchangeInfo.symbols, scanning }).sort(
    (a, b) =>
      priceCracks[a] >=
      priceCracks[b]
  );

const ExchangeInfo = ({ storeAndActions }) => (
  <Grid item xs={12}>
    <Paper>
      <Table expand={true} title="Tracked pairs">
        {orderSymbols(storeAndActions.store).map((symbol) => (
          <TableRow
            key={symbol}
            data={storeAndActions.store.exchangeInfo.symbols[symbol]}
            filter={["symbol", "permissions"]}
          >
            <TableCell>
              <Symbol
                symbol={storeAndActions.store.exchangeInfo.symbols[symbol]}
                storeAndActions={storeAndActions}
              />
            </TableCell>
          </TableRow>
        ))}
      </Table>
    </Paper>
  </Grid>
);

export default ExchangeInfo;
