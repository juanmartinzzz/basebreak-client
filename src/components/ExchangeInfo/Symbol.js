import React from "react";
import { Grid } from "@material-ui/core";
import AddCircle from "@material-ui/icons/AddCircle";
import IconButton from "../Global/IconButton";
import { priceCrack } from "../../utils/price";

const Symbol = ({ symbol, storeAndActions }) => (
  <Grid
    container
    alignItems="center"
    alignContent="center"
    justify="space-between"
  >
    <Grid item>{`${symbol.quoteAsset} > ${symbol.baseAsset}`}</Grid>

    <Grid item>
      {priceCrack({
        prices: storeAndActions.store.priceHistory[symbol.symbol],
      })}
      %
    </Grid>

    <Grid item>
      <IconButton
        Icon={AddCircle}
        onClick={storeAndActions.followingAdd(symbol.symbol)}
      />
    </Grid>
  </Grid>
);

export default Symbol;
