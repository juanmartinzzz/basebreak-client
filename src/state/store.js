import { setLocalStorageItem, getLocalStorageItemV2 } from "../services/localStorage/localStorage";
import { createToken } from "../services/tokenGenerator/tokenGenerator";

export const initialStateStore = {
  layout: {},
  exchangeInfo: {
    symbols: [],
  },
  priceHistory: {
    maxMeasurementsPerSymbol: 60,
    measurementsIntervalSeconds: 120,
    lastMeasurementsTakenAt: (new Date()).getTime(),
  },
  following: {},
  scanning: {
    btc: false,
    eth: false,
    usdt: true,
  },
};

export const getStoreAndActions = ({ storeAndSetStore }) => {
  const [store, setStore] = storeAndSetStore;

  const getStore = () => getLocalStorageItemV2({ name: "store" });

  const updateStoreAndLocalStorage = store => {
    setStore(store);
    setLocalStorageItem("store", store);
  };

  const updateProperty = (propertyName, value) => {
    updateStoreAndLocalStorage({ ...getStore(), [propertyName]: value });
  };

  const callApi = async ({api = "binance", endpoint}) => {
    const apis = {
      binance: "https://api.binance.com/api/v3/"
    };

    const response = await fetch(`${apis[api]}${endpoint}`);
    return await response.json();
  }

  /**
   * Price History actions
   */

  const priceHistoryGetMeasurement = async () => {
    const currentTime = (new Date()).getTime();
    const { priceHistory } = getStore();
    const { lastMeasurementsTakenAt, maxMeasurementsPerSymbol, measurementsIntervalSeconds } = priceHistory;

    setTimeout(() => {
      priceHistoryGetMeasurement(store);
    }, 5 * 1000);

    if(currentTime < lastMeasurementsTakenAt + ((measurementsIntervalSeconds) * 1000)) {
      return;
    }

    const priceMeasurements = await callApi({endpoint: "ticker/price"});
    priceMeasurements.map(({symbol, price}) => {
      const floatPrice = parseFloat(price);
      return priceHistory[symbol] = priceHistory[symbol] ? [...priceHistory[symbol], floatPrice].slice(-maxMeasurementsPerSymbol) : [floatPrice];
    })

    updateProperty("priceHistory", {
      ...priceHistory,
      lastMeasurementsTakenAt: (new Date()).getTime(),
    })
  }

  /**
   * Exchange Info actions
   */

  const exchangeInfoRefresh = async () => {
    const response = await callApi({endpoint: "exchangeInfo"});

    // Transform Symbols from Array to Map
    const symbols = {};
    response.symbols.map(symbol => symbols[symbol.symbol] = symbol);

    updateStoreAndLocalStorage({
      ...initialStateStore,
      exchangeInfo: {...response, symbols}
    })
  }

  /**
   * Following actions
   */

  const followingAdd = (symbol) => () => {
    updateProperty("following", {
      ...store.following,
      [symbol]: {
        priceAlerts: [],
        ...store.following[symbol],
      }
    })
  }

  const followingAddPriceAlert = (symbol, value, direction) => () => {
    const newPriceAlert = {
      id: createToken({ length: 6 }),
      value,
      direction,
      active: true,
    };

    updateProperty("following", {
      ...store.following,
      [symbol]: {
        ...store.following[symbol],
        priceAlerts: [...store.following[symbol].priceAlerts, newPriceAlert],
      }
    })
  }

  const followingRemovePriceAlert = (symbol, id) => () => {
    updateProperty("following", {
      ...store.following,
      [symbol]: {
        ...store.following[symbol],
        priceAlerts: store.following[symbol].priceAlerts.filter(priceAlert => priceAlert.id !== id),
      }
    })
  }

  return {
    store,
    followingAdd,
    exchangeInfoRefresh,
    followingAddPriceAlert,
    followingRemovePriceAlert,
    priceHistoryGetMeasurement,
  };
};
