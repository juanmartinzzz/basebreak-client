import React, { useState, useEffect } from "react";
import LayoutPage from "./LayoutPage";
import { getLocalStorageItemV2 } from "../../services/localStorage/localStorage";
import { getStoreAndActions, initialStateStore } from "../../state/store";

const LayoutContainer = () => {
  const storeAndSetStore = useState(
    getLocalStorageItemV2({
      name: "store",
      defaultValue: initialStateStore,
      flush: false
    })
  );
  const storeAndActions = getStoreAndActions({ storeAndSetStore });
  // console.log("--store", storeAndActions.store)

  useEffect(() => {
    storeAndActions.priceHistoryGetMeasurement();
  }, []);

  return <LayoutPage storeAndActions={storeAndActions} />;
};

export default LayoutContainer;
