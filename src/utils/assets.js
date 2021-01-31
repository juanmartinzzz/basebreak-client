export const getScannedSymbols = ({ symbols = {}, scanning = {} }) =>
  Object.keys(symbols).filter((symbol) => scanning[symbols[symbol].quoteAsset]);

  export const getSymbolsSortedByCrack = ({ priceCracks }) =>
  Object.keys(priceCracks).sort((a,b) => priceCracks[a] > priceCracks[b]);
