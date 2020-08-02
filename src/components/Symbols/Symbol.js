import React, { Fragment } from "react";
import { TableCell, IconButton, Grid } from "@material-ui/core";
import AddCircle from '@material-ui/icons/AddCircle';

const Symbol = ({ symbol, storeAndActions }) => (
  <Grid container alignItems="center" alignContent="center" justify="space-between">
    <Grid item>
      {symbol.symbol}:
      Base: {symbol.baseAsset} -  
      Quote: {symbol.quoteAsset}
    </Grid>
    <Grid item>
      <IconButton color="primary" size="small" onClick={storeAndActions.symbolsAdd(symbol)}>
        <AddCircle />
      </IconButton>
    </Grid>
  </Grid>
);

export default Symbol;