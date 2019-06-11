import creator from "./creator";
import tradesFinder from "./tradesFinder";

function createCryptoData(){
  return creator().map(day => ({
    ...day,
    ...tradesFinder(day.data)
  }));
}

export default createCryptoData;
