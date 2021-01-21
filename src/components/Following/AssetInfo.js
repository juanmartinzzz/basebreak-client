import React, { useLayoutEffect, useRef, useState } from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { priceIncrease, priceCrack } from "../../utils/price";
import { Line, LineChart } from "recharts";
import Numerical from "../Global/Numerical";

const AssetInfo = ({ storeAndActions, symbol }) => {
  const { priceHistory, exchangeInfo } = storeAndActions.store;
  const { symbols } = exchangeInfo;
  const minValue = Math.min(...priceHistory[symbol]);
  const data = priceHistory[symbol].map((price) => ({
    value: price - minValue,
  }));
  const targetRef = useRef();
  const [width, setWidth] = useState(200);

  useLayoutEffect(() => {
    if (targetRef.current) {
      setWidth(targetRef.current.offsetWidth - 30);
    }
  }, []);

  return (
    <Box p={2} ref={targetRef}>
      <LineChart
        width={width}
        height={50}
        data={data}
        margin={{ top: 0, bottom: 0, left: 0, right: 0 }}
      >
        <Line
          type="monotone"
          dataKey="value"
          stroke="#8884d8"
          strokeWidth={1}
          dot={false}
        />
      </LineChart>
      <Grid container spacing={0} justify="space-between">
        <Grid item xs={3}>
          <Typography variant="h6">Quote</Typography>
          <Typography variant="h4">{symbols[symbol].quoteAsset}</Typography>
        </Grid>
        <Grid item xs={3}>
          <a
            href={`https://www.binance.com/en/trade/${symbols[symbol].baseAsset}_${symbols[symbol].quoteAsset}`}
            target="_blank"
          >
            <Typography variant="h6">Base</Typography>
            <Typography variant="h4">{symbols[symbol].baseAsset}</Typography>
          </a>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h6">Price</Typography>
          <Typography variant="h4">
            <Numerical
              value={priceIncrease({
                price:
                  priceHistory[symbol] && priceHistory[symbol].slice(-1)[0],
              })}
            />
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h6">Crack %</Typography>
          <Typography variant="h4" color="primary">
            <Numerical
              decimal={2}
              value={priceCrack({ prices: priceHistory[symbol] })}
            />
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AssetInfo;
