import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import AssetInfo from "./AssetInfo";
import Alerts from "./Alerts";
import { priceCrack } from "../../utils/price";

const Following = ({ storeAndActions }) => {
  const { following, priceHistory } = storeAndActions.store;
  const followingOrdered = Object.keys(following).sort(
    (a, b) =>
      priceCrack({ prices: priceHistory[a] }) >
      priceCrack({ prices: priceHistory[b] })
  );

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography align="center">Following</Typography>
      </Grid>

      {followingOrdered.map((symbol) => (
        <Grid item xs={6} sm={4} md={3} lg={2} xl={1} key={symbol}>
          <Paper onDoubleClick={storeAndActions.followingRemove(symbol)}>
            <AssetInfo symbol={symbol} storeAndActions={storeAndActions} />

            <Alerts symbol={symbol} storeAndActions={storeAndActions} />
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default Following;
