// Creates 10 days worth of crypto data

// Data stracture :
/* 
trading day = {
date : String,
data : [
    currency : String,
    quotes : [{
        time : String , Price : String
    }]
]
}
*/
function createTradingDays() {
  const coinNames = ["BTC", "ETC", "LTC", "XRP", "BNB"];

  // Supercharged crypto values LOL - makes it more interesting
  let coinValues = {
    BTC: "7951.97",
    ETC: "10000.32",
    LTC: "12226.91",
    XRP: "5000.39",
    BNB: "9001.73"
  };

  const times = ["0800", "1000", "1200", "1400", "1600" , "1800" , "2000" , "2200" , "0000" , "0200" , "0400" , "0600"];

  let date = 20190601;

  const tradingDays = [];

  // Create a new price
  const genNewPrice = coinValuesObject => {
    const entries = Object.entries(coinValuesObject);

    entries.forEach(entry => {
      const price = Number(entry[1]);

      // Make a shift somewhere between 0 and 10 %
      const multiplier = Math.random() * 0.1;

      // 50% chance to go up or down
      let newPrice =
        Math.random() > 0.5
          ? price + price * multiplier
          : price - price * multiplier;

      if (newPrice <= 0) {
        newPrice = 5 * multiplier;
      }

      coinValuesObject[entry[0]] = Math.round(newPrice * 100) / 100;
    });

    return coinValuesObject;
  };

  for (let i = 0; i < 10; i++) {
    // Insert Date
    const tradingDay = {
      date: date.toString(),
      data: []
    };

    // Create data for every currency :
    tradingDay.data = coinNames.map(name => {
      return {
        currency: name,
        quotes: times.map(time => {
          coinValues = { ...genNewPrice(coinValues) };

          return {
            time,
            price: coinValues[name]
          };
        })
      };
    });

    tradingDays.push(tradingDay);

    //  Modify date
    date++;
  }

  return tradingDays
}
export default createTradingDays;
