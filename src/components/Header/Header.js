import React from "react";
import { AppBar, Toolbar, Grid, IconButton } from "@material-ui/core";
import Refresh from '@material-ui/icons/Refresh';

const Header = ({ storeAndActions }) => (
  <AppBar position="fixed">
    <Toolbar>
      <Grid container justify="flex-end">
        <Grid item>
          <IconButton color="secondary" onClick={storeAndActions.exchangeInfoRefresh}>
            <Refresh />
          </IconButton>
        </Grid>
      </Grid>
    </Toolbar>
  </AppBar>
);

export default Header;