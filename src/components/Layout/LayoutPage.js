import React from "react";
import Table from "../Table/Table";
import { CssBaseline, TableRow, TableCell, Paper, Box, Grid } from "@material-ui/core";
import Header from "../Header/Header";
import Symbols from "../Symbols/Symbols";

const LayoutPage = ({ storeAndActions }) => (
  <CssBaseline>
    <Header storeAndActions={storeAndActions} />

    <Box m={8}></Box>

    <Box p={2}>
      <Grid container spacing={2}>       
        <Grid item xs={12}>
          <Symbols storeAndActions={storeAndActions} />
        </Grid>
      </Grid>
    </Box>
  </CssBaseline>
);

export default LayoutPage;
