import React from "react";
import { CssBaseline, Box, Grid } from "@material-ui/core";
import Header from "../Header/Header";
import ExchangeInfo from "../ExchangeInfo/ExchangeInfo";
import Following from "../Following/Following";
import PriceHistory from "../PriceHistory/PriceHistory";
import Configuration from "../Configuration/Configuration";

const LayoutPage = ({ storeAndActions }) => (
  <CssBaseline>
    <Header storeAndActions={storeAndActions} />

    <Box m={8}></Box>

    <Box p={2}>
      <Configuration storeAndActions={storeAndActions} />

      <Following storeAndActions={storeAndActions} />

      <Box m={4}></Box>

      <PriceHistory storeAndActions={storeAndActions} />

      <ExchangeInfo storeAndActions={storeAndActions} />
    </Box>
  </CssBaseline>
);

export default LayoutPage;
