import React, { Fragment } from "react";
import Chart from "./Chart";

export default function TradingDay({ day }) {
  return (
    <Fragment>
      <div className="row text-center mt-5 mb-5">
        <div className="col-md-8 d-flex justify-content-center">
          <Chart dayData={day.data} />
        </div>
        <div className="col-md-4 d-flex justify-content-center align-items-center">
          <div class="card">
           

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
              <h4 className="">Best Trade of the day: </h4>
              <h6 className="">
              
                  Buy {day.winnerTrade.currency} at {day.winnerTrade.buy.time},
                  and sell it at {day.winnerTrade.sell.time}.
                  <br />
                  Net Profit : {day.winnerTrade.profit}$
               
              </h6>
              <hr />

              <h5>Best Trades By Coin:</h5>

              {day.bestTrades.map(trade => (
                <p>
                  <strong className="mr-2">
                    {trade.currency} : Profit - {trade.profit}$  
                  </strong>
                  <span className="text-danger">{trade.buy.price }</span>
                  <i className="fas fa-angle-double-right ml-1 mr-1"></i>
                  <span className="text-success">{trade.sell.price}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
