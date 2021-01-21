import React from "react";
import { CssBaseline, Box, Grid } from "@material-ui/core";
import Configuration from "../Configuration/Configuration";
import ExchangeInfo from "../ExchangeInfo/ExchangeInfo";
import Following from "../Following/Following";
import Header from "../Header/Header";
import Alerts from "../Alerts/Alerts";

const LayoutPage = ({ storeAndActions }) => (
  <CssBaseline>
    <Header storeAndActions={storeAndActions} />

    <Box m={4}></Box>

    <Box p={2}>
      <Grid container justify="center" spacing={4}>
        <Grid item xs={12} md={6}>
          <Configuration storeAndActions={storeAndActions} />
        </Grid>

        <Grid item xs={12}>
          <Following storeAndActions={storeAndActions} />
        </Grid>

        <Grid item xs={12} md={6}>
          <ExchangeInfo storeAndActions={storeAndActions} />
        </Grid>

        <Grid item xs={12} md={6}>
          <Alerts storeAndActions={storeAndActions} />
        </Grid>
      </Grid>
    </Box>
  </CssBaseline>
);

export default LayoutPage;
