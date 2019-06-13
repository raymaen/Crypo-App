// Gets a single day worth of trading data and finds:
// 1) Best trade for each coin
// 2) The best trade from all the coins (winner trade)

function bestTradesFinder(tradingDay) {
  const bestTrades = [];


tradingDay.forEach((coinData, i) => {
    const quotes = coinData.quotes;
    let buy = quotes[0]
    let sell = quotes[0]
    let profit = 0

    quotes.forEach((buyerQuote, x) => {
      quotes.slice(x+1, quotes.length).forEach(sellerQuote => {
        if(sellerQuote.price - buyerQuote.price > profit){
            buy = buyerQuote 
            sell = sellerQuote
            profit = (Math.round((sellerQuote.price - buyerQuote.price)*100)) / 100
        }
      });
    });

    bestTrades[i] = {
        currency : coinData.currency,
        buy,
        sell,
        profit
    }

  });

  let winnerTrade = {...bestTrades[0]}

  bestTrades.forEach(trade => {
    if(trade.profit > winnerTrade.profit)
    winnerTrade = trade
  })

  return {
      winnerTrade , 
      bestTrades
  }

}

module.exports = bestTradesFinder

