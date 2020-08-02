
import { setLocalStorageItem } from "../services/localStorage/localStorage";

export const initialStateStore = {
  layout: {},
  exchangeInfo: {
    symbols: [],
  },
  symbols: [],
};

export const getStoreAndActions = ({ storeAndSetStore }) => {
  const [store, setStore] = storeAndSetStore;

  const updateStoreAndLocalStorage = store => {
    setStore(store);
    setLocalStorageItem("store", store);
  };

  const updateProperty = (propertyName, value) => {
    updateStoreAndLocalStorage({ ...store, [propertyName]: value });
  };

  const callApiEndpoint = async endpoint => {
    const response = await fetch(endpoint);

    return await response.json();
  }

  const exchangeInfoRefresh = async () => {
    const response = await callApiEndpoint("https://api.binance.com/api/v3/exchangeInfo");

    updateProperty("exchangeInfo", response);
  }

  const symbolsAdd = (symbol) => () => {
    console.log("--symbol", symbol)
    // TODO:
  }

  return {
    store,
    symbolsAdd,
    exchangeInfoRefresh,
  };
};
