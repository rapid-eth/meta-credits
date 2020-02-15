/**
 * @function Provider
 * @param {Array} contracts
 * @param {String} provider
 */

/* --- Global --- */
import React, { useContext, useReducer, useEffect } from "react";
// import Fortmatic from "fortmatic";
// import BurnerConnectProvider from "@burner-wallet/burner-connect-provider";
import { ethers } from "ethers";
// import Web3Connect from "web3connect";

/* --- Local --- */
import Context from "../Context";
import reducer from "../reducer";
import * as actionList from "../actions";
import {
  enhanceActions,
  enhanceSystemActions,
  contractLoad,
  extensionsInitialize
} from "../middleware";

import {
  combineExtensionInitialState,
  combineExtensionsReducers
} from "../utility";

import { useContractConnect, useWalletEnable } from "../system";

/* --- Component --- */
const Provider = ({ children, contracts, extensions }) => {
  /* --- Ethers Context --- */
  const initialState = useContext(Context);
  /* --- Reducer --- */
  const [state, dispatch] = useReducer(
    combineExtensionsReducers([{ name: "core", reducer }, ...extensions]),
    combineExtensionInitialState([
      { name: "core", initialState },
      ...extensions
    ]),
    contractLoad(contracts)
  );

  useEffect(() => {
    (async () => {
      // let fortmatic = await new Fortmatic("pk_live_4CB1AA93B1F1F434");
      // let provider = await new ethers.providers.Web3Provider(
      //   fortmatic.getProvider()
      // );
    })();
  }, [dispatch]);

  /* --- System --- */
  useContractConnect(state, dispatch);
  useWalletEnable(state);

  /* --- Extensions : Initialize --- */
  extensionsInitialize(extensions, state, dispatch);

  /* --- Enhance Actions --- */
  const actions = enhanceActions(extensions, dispatch);
  // const actionsList = enhanceSystemActions(actionList, state, dispatch);
  /* --- Developer Messages --- */

  console.log(state, "Ethers Provider");

  return (
    <Context.Provider
      value={{
        ...state,
        ...actions
        // ...actionsList
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
