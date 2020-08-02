import React, { useState } from "react";
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
  // console.log("--store", storeAndActions.store);
  // console.log("--localStore", JSON.parse(localStorage.store));

  return <LayoutPage storeAndActions={storeAndActions} />;
};

export default LayoutContainer;
