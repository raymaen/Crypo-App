const testData = require('../api/cryptoLogic/testData');
const bestTradesFinder = require("../api/cryptoLogic/tradesFinder");
const cryptoData = require("../api/cryptoLogic/cryptoData")();

describe("Backend crypto data", () => {

  test("Best trades finder finds the best trades", () => {
    const data = bestTradesFinder(testData);
    expect(data.winnerTrade.currency).toBe("BTC");
    expect(data.winnerTrade.profit).toBe(2.03);
    expect(data.bestTrades[2].profit).toBe(0.71);
  });

  test("Generated crypto data produces an array", () => {
    expect(Array.isArray(cryptoData)).toBeTruthy;
  });

  test("Generated crypto data is 10 days long", () => {
    expect(cryptoData.length).toBe(10);
  });

  test("Generated crypto data generates 5 coins", () => {
    expect(cryptoData[0].data.length).toBe(5);
  });

  test("Generated crypto data generates valid price", () => {
    expect(typeof cryptoData[0].data[0].quotes[0].price).toBe("number");
    expect(cryptoData[0].data[0].quotes[0].price).toBeGreaterThan(0);
  });

  test("Produces best trades for every coin", () => {
    const bestTradesCount = cryptoData[0].bestTrades.length
    const coinCount = cryptoData[0].data.length
    expect(bestTradesCount).toEqual(coinCount)
  });

});
