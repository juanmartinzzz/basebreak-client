import React from "react";
import { CssBaseline, Box, Grid } from "@material-ui/core";
import Header from "../Header/Header";
import ExchangeInfo from "../ExchangeInfo/ExchangeInfo";
import Following from "../Following/Following";

const LayoutPage = ({ storeAndActions }) => (
  <CssBaseline>
    <Header storeAndActions={storeAndActions} />

    <Box m={8}></Box>

    <Box p={2}>
      <Grid container spacing={2}>
        <Following storeAndActions={storeAndActions} />

        <ExchangeInfo storeAndActions={storeAndActions} />
      </Grid>
    </Box>
  </CssBaseline>
);

export default LayoutPage;
