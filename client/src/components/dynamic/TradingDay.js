import React, { Fragment } from "react";
import Chart from "./Chart";
import TradingStats from "./TradingStats";

export default function TradingDay({ day }) {
  return (
    <Fragment>
      <div className="row text-center mt-5 mb-5">
        <div className="col-md-8 d-flex justify-content-center">
          <Chart dayData={day.data} />
        </div>
        <div className="col-md-4 d-flex justify-content-center align-items-center">
          <TradingStats day={day} />
        </div>
      </div>
    </Fragment>
  );
}
