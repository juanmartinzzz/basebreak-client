import React from "react";
import { Grid } from "@material-ui/core";
import AddCircle from "@material-ui/icons/AddCircle";
import IconButton from "../Global/IconButton";
import { priceCrack } from "../../utils/price";
import Numerical from "../Global/Numerical";

const Symbol = ({ symbol, storeAndActions }) => (
  <Grid
    container
    alignItems="center"
    alignContent="center"
    justify="space-between"
  >
    <Grid item xs={9}>{`${symbol.quoteAsset} > ${symbol.baseAsset}`}</Grid>

    <Grid item>
      <Numerical
        type="%"
        decimal={2}
        value={priceCrack({
          prices: storeAndActions.store.priceHistory[symbol.symbol],
        })}
      />
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
