export const getScannedSymbols = ({ symbols = {}, scanning = {} }) =>
  Object.keys(symbols).filter((symbol) => scanning[symbols[symbol].quoteAsset]);
