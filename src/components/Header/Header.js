import React from "react";
import { AppBar, Toolbar, Grid, Button } from "@material-ui/core";
import IconButton from "../Global/IconButton";
import Refresh from '@material-ui/icons/Refresh';

const Header = ({ storeAndActions }) => (
  <AppBar position="fixed">
    <Toolbar>
      <Grid container spacing={1} justify="flex-end">
        <Grid item>
          <Button color="secondary" endIcon={<Refresh />} onClick={storeAndActions.exchangeInfoRefresh}>
            Measurements: {storeAndActions.store.priceHistory["ETHBTC"].length}
          </Button>
        </Grid>

        <Grid item>
          <Button color="secondary" size="small" variant={storeAndActions.store.scanning.btc ? "contained" : "outlined"}>BTC</Button>
        </Grid>

        <Grid item>
          <Button color="secondary" size="small" variant={storeAndActions.store.scanning.eth ? "contained" : "outlined"}>ETH</Button>
        </Grid>

        <Grid item>
          <Button color="secondary" size="small" variant={storeAndActions.store.scanning.usdt ? "contained" : "outlined"}>USDT</Button>
        </Grid>
      </Grid>
    </Toolbar>
  </AppBar>
);

export default Header;