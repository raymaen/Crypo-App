import React from "react";

export default function TradingStats({ day }) {
  return (
    <div class="card trading-stats">
      <div className="card-body text-left">
        <h1 className="card-title text-center text-primary mb-4">
          Date :
          {" " +
            day.date[6] +
            day.date[7] +
            "-" +
            day.date[4] +
            day.date[5] +
            "-" +
            day.date[0] +
            day.date[1] +
            day.date[2] +
            day.date[3]}
        </h1>
        <h4>Best Trade of the day: </h4>
        <h6>
          Buy {day.winnerTrade.currency} at {day.winnerTrade.buy.time}, and sell
          it at {day.winnerTrade.sell.time}.
          <br />
          Net Profit : {day.winnerTrade.profit}$
        </h6>
        <hr />

        <h5>Best Trades By Coin:</h5>

        {day.bestTrades.map(trade => (
          <p className="coin-profit">
            <strong className="mr-2">
              {trade.currency} : Profit - {trade.profit}$
            </strong>
            <span className="text-danger">{trade.buy.price}</span>
            <i className="fas fa-angle-double-right ml-1 mr-1" />
            <span className="text-success">{trade.sell.price}</span>
          </p>
        ))}
      </div>
    </div>
  );
}
