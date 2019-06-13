// Square/square.test.js
import React from "react";
import checkPropTypes from "check-prop-types";
import { shallow } from "enzyme";

import Chart from "../../components/dynamic/Chart";

describe("App component", () => {
  it("renders without crashing", () => {
    shallow(<Chart />);
  });

  it("Should not throw a proptype warning", () => {
    const testProp = {
      dayData: [
        {
          currency: "TESTCOIN",
          quotes: [
            {
              time: "1000",
              price: 100
            },
            {
              time: "1100",
              price: 10123
            }
          ]
        }
      ]
    };

    const propErrors = checkPropTypes(
      Chart.propTypes,
      testProp,
      "props",
      Chart.name
    );
    expect(propErrors).toBeUndefined();
  });
});
