export const priceIncrease = ({
  price,
  greaterThan = 1000,
  decimalPlaces = 0,
}) => {
  for (let i = 0; i <= 8; i++) {
    if (price * Math.pow(10, i) > greaterThan) {
      return (price * Math.pow(10, i)).toFixed(decimalPlaces);
    }
  }

  return price;
};

export const priceCrack = ({ prices = [1] }) => {
  const lastPrice = prices.slice(-1)[0];
  const allPricesExceptLast = prices.slice(0, -1);
  const sum = allPricesExceptLast.reduce((sum, price) => sum + price, 0);
  const average = sum / (prices.length - 1);

  const percentageCrack = ((1 - average / lastPrice) * 100).toFixed(2);

  return parseFloat(percentageCrack);
};
