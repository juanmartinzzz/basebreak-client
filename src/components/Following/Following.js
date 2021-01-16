import React from "react";
import { Badge, Box, Grid, Paper } from "@material-ui/core";
import AssetInfo from "./AssetInfo";
import Alerts from "./Alerts";
import { Mail } from "@material-ui/icons";

const Following = ({ storeAndActions }) => {
  const { following } = storeAndActions.store;

  return (
    <Grid container spacing={2}>
      {Object.keys(following).map((symbol) => (
        <Grid item xs={6} md={4} lg={3} key={symbol}>
          <Paper>
            <AssetInfo symbol={symbol} storeAndActions={storeAndActions} />

            <Alerts symbol={symbol} storeAndActions={storeAndActions} />
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default Following;
