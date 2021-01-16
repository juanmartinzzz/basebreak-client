import React from "react";
import { AppBar, Toolbar, Grid, Button } from "@material-ui/core";
import Refresh from '@material-ui/icons/Refresh';
import { Settings } from "@material-ui/icons";
import IconButton from "../Global/IconButton";

const Header = ({ storeAndActions }) => (
  <AppBar position="fixed">
    <Toolbar>
      <Grid container spacing={1} justify="flex-end">
        <Grid item>
          <Button color="secondary" endIcon={<Refresh />} onClick={storeAndActions.exchangeInfoRefresh}>
            Measurements: {storeAndActions.store.priceHistory["ETHBTC"].length}
          </Button>
        </Grid>

        {storeAndActions.store.exchangeInfo.quoteAssets.slice(0,4).map(quoteAsset => (
          <Grid item key={quoteAsset}>
            <Button color="secondary" size="small" variant={storeAndActions.store.scanning[quoteAsset] ? "contained" : "outlined"}>{quoteAsset}</Button>
          </Grid>
        ))}

        <Grid item><IconButton color="secondary" Icon={Settings} /></Grid>
      </Grid>
    </Toolbar>
  </AppBar>
);

export default Header;