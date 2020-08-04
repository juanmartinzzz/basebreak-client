import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { priceIncrease, priceCrack } from "../../utils/price";

const AssetInfo = ({ storeAndActions, symbol }) => {
  const { priceHistory, exchangeInfo } = storeAndActions.store;
  const { symbols } = exchangeInfo;

  return (
    <Box p={2}>
      <Grid container spacing={1} justify="space-between">
        <Grid item xs={10}>
          <Typography variant="h6">Base</Typography>
          <Typography variant="h4">{symbols[symbol].baseAsset}</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h6">Quote</Typography>
          <Typography variant="h4">{symbols[symbol].quoteAsset}</Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography variant="h6">Readings</Typography>
          <Typography variant="h4">{priceHistory[symbol] && priceHistory[symbol].length}</Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography variant="h6">Price</Typography>
          <Typography variant="h4">{priceIncrease({price: priceHistory[symbol] && priceHistory[symbol].slice(-1)[0]})}</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h6">Crack&nbsp;%</Typography>
          <Typography variant="h4">{priceCrack({prices: priceHistory[symbol]})}</Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default AssetInfo;