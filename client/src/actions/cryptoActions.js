import axios from "axios";

import { GET_TRADING_DATA } from "./types";

// Get trading data from db
export const getCryptoData = () => dispatch => {
  axios
    .get("/api/crypto")
    .then(res =>
      dispatch({
        type: GET_TRADING_DATA,
        payload: res.data.cryptoData
      })
    )
    .catch(err => console.log(err));
};

// Set crypto data from db
export const createCryptoData = () => dispatch => {
  axios
    .post("/api/crypto")
    .then(res =>
      dispatch({
        type: GET_TRADING_DATA,
        payload: res.data.cryptoData
      })
    )
    .catch(err => console.log(err));
};
