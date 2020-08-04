import React from "react";
import { Box, Grid, Typography, InputAdornment } from "@material-ui/core";
import TextField from "../Global/TextField";

const PriceHistory = ({ storeAndActions }) => (
  <Box p={1}>
    <Grid container spacing={2}>
      <Grid item xs={12}><Typography>Price History Configuration</Typography></Grid>
      <Grid item xs={6}>
        <TextField  
          type="number"  
          label="Max Measurements" 
          name="maxMeasurementsPerSymbol"
          info="The maximum number of measurements that will be taken"
          value={storeAndActions.store.priceHistory.maxMeasurementsPerSymbol}
          onChange={storeAndActions.priceHistoryUpdate}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          type="number"
          label="Measure Every Seconds" 
          name="measurementsIntervalSeconds"
          info="The number of seconds between measurements"
          value={storeAndActions.store.priceHistory.measurementsIntervalSeconds}
          onChange={storeAndActions.priceHistoryUpdate}
        />
      </Grid>
    </Grid>
  </Box>
);

export default PriceHistory; 