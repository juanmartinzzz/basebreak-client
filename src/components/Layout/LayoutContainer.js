import React, { useState, useEffect } from "react";
import LayoutPage from "./LayoutPage";
import {
  getLocalStorageItemV2,
  setLocalStorageItem,
} from "../../services/localStorage/localStorage";
import { getStoreAndActions, initialStateStore } from "../../state/store";

const LayoutContainer = () => {
  // setLocalStorageItem("store", initialStateStore);
  const storeAndSetStore = useState(
    getLocalStorageItemV2({
      name: "store",
      defaultValue: initialStateStore,
    })
  );
  const storeAndActions = getStoreAndActions({ storeAndSetStore });

  useEffect(() => {
    storeAndActions.priceHistoryGetMeasurement();
    storeAndActions.alertsAnalize();
  }, []);

  return <LayoutPage storeAndActions={storeAndActions} />;
};

export default LayoutContainer;
