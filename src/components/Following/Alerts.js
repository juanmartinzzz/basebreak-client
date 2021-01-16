import React, { useState } from "react";
import Table from "../Global/Table/Table";
import IconButton from "../Global/IconButton";
import Delete from "@material-ui/icons/Delete";
import AddCircle from "@material-ui/icons/AddCircle";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import { TableRow, TableCell, Grid, TextField } from "@material-ui/core";
// import ArrowDownward from '@material-ui/icons/ArrowDownward';

const Alerts = ({ symbol, storeAndActions }) => {
  const [price, setPrice] = useState(0);
  const { following } = storeAndActions.store;

  return (
    <Table title="Alerts" titleVariant="h4" expand={false} filterable={false}>
      <TableRow>
        <TableCell>
          <Grid container alignItems="center" justify="space-between">
            <Grid item xs={8}>
              <TextField
                // label="New price alert"
                variant="outlined"
                size="small"
                type="number"
                value={price}
                onChange={({ target }) => setPrice(target.value)}
              />
            </Grid>
            <Grid item xs={1}>
              <IconButton Icon={ArrowUpward} />
            </Grid>
            <Grid item xs={1}>
              <IconButton
                Icon={AddCircle}
                onClick={storeAndActions.followingAddPriceAlert(
                  symbol,
                  price,
                  "up"
                )}
              />
            </Grid>
          </Grid>
        </TableCell>
      </TableRow>

      {following[symbol].priceAlerts.map((priceAlert, index) => (
        <TableRow key={index}>
          <TableCell>
            <Grid container justify="space-between">
              <Grid item>
                {priceAlert.value} - {priceAlert.direction}
              </Grid>
              <Grid item>
                <IconButton
                  Icon={Delete}
                  onClick={storeAndActions.followingRemovePriceAlert(
                    symbol,
                    priceAlert.id
                  )}
                />
              </Grid>
            </Grid>
          </TableCell>
        </TableRow>
      ))}
    </Table>
  );
};

export default Alerts;
