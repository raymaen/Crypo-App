import { GET_TRADING_DATA } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case GET_TRADING_DATA:
      return action.payload;
    default:
      return state;
  }
};
