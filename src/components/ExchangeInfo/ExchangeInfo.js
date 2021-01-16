import React from "react";
import { Paper, TableRow, TableCell, Grid } from "@material-ui/core";
import Table from "../Global/Table";
import Symbol from "./Symbol";

const getScannedAssetKeys = (store) => (
  Object.keys(store.exchangeInfo.symbols).filter(key => {
    const quoteAsset = store.exchangeInfo.symbols[key].quoteAsset;

    return store.scanning[quoteAsset];
  })
)

const ExchangeInfo = ({ storeAndActions }) => (
  <Grid item xs={12}>
    <Paper>
      <Table title={`All Pairs in the Exchange ${getScannedAssetKeys(storeAndActions.store).length}`} expand={false}>
        {getScannedAssetKeys(storeAndActions.store).map(key => (
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