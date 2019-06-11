import testData from '../actions/cryptoLogic/testData'
import bestTradesFinder from '../actions/cryptoLogic/tradesFinder'

describe("Backend cypto data", () => {
  test("Best trades finder finds the best trades", () => {
    const data = bestTradesFinder(testData);

    expect(data.winnerTrade.currency).toBe("BTC");
    expect(data.winnerTrade.profit).toBe(2.03);
    expect(data.bestTrades[2].profit).toBe(0.71);
  });
});
