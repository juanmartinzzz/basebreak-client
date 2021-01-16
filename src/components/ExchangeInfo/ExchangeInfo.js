import React from "react";
import { Paper, TableRow, TableCell, Grid } from "@material-ui/core";
import Table from "../Global/Table/Table";
import Symbol from "./Symbol";
import { priceCrack } from "../../utils/price";

const orderSymbols = ({ exchangeInfo, priceHistory }) =>
  Object.keys(exchangeInfo.symbols)
    .map((symbol) => exchangeInfo.symbols[symbol])
    .sort(
      (a, b) =>
        priceCrack({ prices: priceHistory[a.symbol] }) >=
        priceCrack({ prices: priceHistory[b.symbol] })
    );

const getScannedSymbols = (store) =>
  orderSymbols(store).filter((symbol) => {
    return store.scanning[symbol.quoteAsset];
  });

const ExchangeInfo = ({ storeAndActions }) => (
  <Grid item xs={12}>
    <Paper>
      <Table
        title={`Tracked pairs: ${
          getScannedSymbols(storeAndActions.store).length
        }`}
        expand={true}
      >
        {getScannedSymbols(storeAndActions.store).map((symbol) => (
          <TableRow key={symbol.symbol}>
            <TableCell>
              <Symbol symbol={symbol} storeAndActions={storeAndActions} />
            </TableCell>
          </TableRow>
        ))}
      </Table>
    </Paper>
  </Grid>
);

export default ExchangeInfo;
