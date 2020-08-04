import React from "react";
import { Grid, Paper } from "@material-ui/core";
import AssetInfo from "./AssetInfo";
import Alerts from "./Alerts";

const Following = ({ storeAndActions }) => {
  const { following } = storeAndActions.store;
  
  return Object.keys(following).map(symbol => (
    <Grid item xs={6} md={4} lg={3} key={symbol}>
      <Paper>
        <AssetInfo symbol={symbol} storeAndActions={storeAndActions} />

        <Alerts symbol={symbol} storeAndActions={storeAndActions} />
      </Paper>
    </Grid>
  ))
};

export default Following;