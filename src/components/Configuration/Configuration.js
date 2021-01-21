import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import TextField from "../Global/TextField";
import Select from "../Global/Select";

const Configuration = ({ storeAndActions }) => {
  if (!storeAndActions.store.layout.showConfiguration) {
    return null;
  }

  return (
    <Grid container spacing={2} alignContent="center">
      <Grid item xs={12}>
        <Box m={4}></Box>
        <Typography align="center">Price History</Typography>
      </Grid>

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

      <Grid item xs={12}>
        <Typography align="center">Alerts</Typography>
      </Grid>

      <Grid item xs={4}>
        <TextField
          type="number"
          label="% for sound alert"
          name="alerts.priceVariationForAlert"
          info="An alert will be sent if the average price of all measurements, and the most recent measurement, are more than this % different (example: value 5 means a Symbol with averange price of 100 will trigger an alert if the latest price is under 95 or above 105)"
          value={storeAndActions.store.alerts.priceVariationForAlert}
          onChange={storeAndActions.updatePropertyFromInput}
        />
      </Grid>

      <Grid item xs={4}>
        <Select
          label="Sound alert"
          name="alerts.soundForAlert"
          info="--TBD"
          value={storeAndActions.store.alerts.soundForAlert}
          onChange={({ target }) =>
            storeAndActions.alertsChangeSound(target.value)
          }
          options={[
            { value: "bbc-bell-tram-1-time.mp3", label: "Test Sound 1" },
            { value: "bbc-bell-tram-2-times.mp3", label: "Test Sound 2" },
          ]}
        />
      </Grid>

      <Grid item xs={4}>
        <TextField
          type="number"
          label="% for Telegram alert"
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
  );
};

export default Configuration;
