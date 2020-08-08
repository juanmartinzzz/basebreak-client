import React from "react";
import { Box, Grid, Typography, InputAdornment } from "@material-ui/core";
import TextField from "../Global/TextField";

const PriceHistory = ({ storeAndActions }) => (
  <Box p={1}>
    <Grid container spacing={2}>
      <Grid item xs={12}><Typography variant="h3" align="center">Configuration</Typography></Grid>
      <Grid item xs={12}><Typography align="center">Price History</Typography></Grid>
      <Grid item xs={6}>
        <TextField  
          type="number"  
          label="Max Measurements" 
          name="priceHistory.maxMeasurementsPerSymbol"
          info="Maximum number of measurements that will be taken"
          value={storeAndActions.store.priceHistory.maxMeasurementsPerSymbol}
          onChange={storeAndActions.updatePropertyFromInput}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          type="number"
          label="Measure Every Seconds" 
          name="priceHistory.measurementsIntervalSeconds"
          info="Number of seconds between measurements taken from Binance API"
          value={storeAndActions.store.priceHistory.measurementsIntervalSeconds}
          onChange={storeAndActions.updatePropertyFromInput}
        />
      </Grid>
      <Grid item xs={12}><Typography align="center">Alerts</Typography></Grid>
      <Grid item xs={4}>
        <TextField
          type="number"
          label="Crack % for alerts" 
          name="alerts.priceVariationForAlert"
          info="An alert will be sent if the average price of all measurements, and the most recent measurement, are more than this % different (example: value 5 means a Symbol with averange price of 100 will trigger an alert if the latest price is under 95 or above 105)"
          value={storeAndActions.store.alerts.priceVariationForAlert}
          onChange={storeAndActions.updatePropertyFromInput}
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          type="number"
          label="Alert every minutes" 
          name="alerts.alertIntervalMinutes"
          info="An alert will be sent if the average price of all measurements, and the most recent measurement, are more than this % different (example: value 5 means a Symbol with averange price of 100 will trigger an alert if the latest price is under 95 or above 105)"
          value={storeAndActions.store.alerts.alertIntervalMinutes}
          onChange={storeAndActions.updatePropertyFromInput}
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          label="Telegram user ID" 
          name="alerts.telegramUserId"
          info="TBD"
          value={storeAndActions.store.alerts.telegramUserId}
          onChange={storeAndActions.updatePropertyFromInput}
        />
      </Grid>
    </Grid>
  </Box>
);

export default PriceHistory; 