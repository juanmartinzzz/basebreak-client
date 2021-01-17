import React from "react";
import { Grid, Paper } from "@material-ui/core";
import AssetInfo from "./AssetInfo";
import Alerts from "./Alerts";

const Following = ({ storeAndActions }) => {
  const { following } = storeAndActions.store;

  return (
    <Grid container spacing={2}>
      {Object.keys(following).map((symbol) => (
        <Grid item xs={6} sm={4} md={3} lg={2} xl={1} key={symbol}>
          <Paper
            // onClick={() => {}}
            onDoubleClick={storeAndActions.followingRemove(symbol)}
          >
            <AssetInfo symbol={symbol} storeAndActions={storeAndActions} />

            <Alerts symbol={symbol} storeAndActions={storeAndActions} />
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default Following;
