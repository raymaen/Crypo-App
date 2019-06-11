import React from "react";
import GenerateDataButton from './GenerateDataButton'


export default function HeroBanner() {
  return (
    <div
      className="container-fluid text-center  text-white"
      style={{
        background: "#00695c",
        padding: "100px 20px"
      }}
    >
      <div className="row">
        <div className="col-md-6 mx-auto">
          <h1 className="display-4 text-uppercase">Crypto Data Creator</h1>
          <h3>Built using mongo, express, node, react, redux and recharts.</h3>
          <hr />
          <p>
           Find out the best trades from randomised datasets, displayed
           in responsive line charts.
           <br/>
           Every time you click the generate data button, you will be
           creating 10 trade days.
           
          </p>


          <GenerateDataButton />
         

        </div>
      </div>
    </div>
  );
}
