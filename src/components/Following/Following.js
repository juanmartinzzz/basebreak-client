import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import AssetInfo from "./AssetInfo";
import Alerts from "./Alerts";
import IconButton from "../Global/IconButton";
import { Timeline } from "@material-ui/icons";
import { getSymbolsSortedByCrack } from "../../utils/assets";

const Following = ({ storeAndActions }) => {
  const { following, priceCracks } = storeAndActions.store;
  const followingOrdered = Object.keys(following).sort(
    (a, b) =>
      priceCracks[a] >
      priceCracks[b]
  );
  const topCracked = getSymbolsSortedByCrack({ priceCracks }).filter(symbol => !symbol.includes("DOWN"));

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography align="center">
          Following
          <IconButton
            color={storeAndActions.store.autoFollow.on ? "secondary" : "primary"}
            Icon={Timeline}
            onClick={storeAndActions.autoFollowToggle}
          />
        </Typography>
      </Grid>

      {storeAndActions.store.autoFollow.on && topCracked.slice(0,storeAndActions.store.autoFollow.crackPercentage).map((symbol) => (
        <Grid item xs={6} sm={4} md={3} lg={2} xl={1} key={symbol}>
          <Paper>
            <AssetInfo symbol={symbol} storeAndActions={storeAndActions} />
          </Paper>
        </Grid>
      ))}

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
