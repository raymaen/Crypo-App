const creator = require('./creator');
const tradesFinder = require('./tradesFinder');

function createCryptoData(){
  return creator().map(day => ({
    ...day,
    ...tradesFinder(day.data)
  }));
}

module.exports = createCryptoData;
