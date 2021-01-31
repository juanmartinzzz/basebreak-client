import React from "react";
import { Grid } from "@material-ui/core";
import AddCircle from "@material-ui/icons/AddCircle";
import IconButton from "../Global/IconButton";
import Numerical from "../Global/Numerical";
import { TrendingUp } from "@material-ui/icons";

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
        value={storeAndActions.store.priceCracks[symbol.symbol]}
      />
    </Grid>

    <Grid item>
      <a
        href={`https://www.binance.com/en/trade/${symbol.baseAsset}_${symbol.quoteAsset}`}
        target="_blank"
      >
        <TrendingUp />
      </a>
    </Grid>

    <Grid item>
      <IconButton
        Icon={AddCircle}
        disabled={!!storeAndActions.store.following[symbol.symbol]}
        onClick={storeAndActions.followingAdd(symbol.symbol)}
      />
    </Grid>
  </Grid>
);

export default Symbol;
