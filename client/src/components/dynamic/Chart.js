import React, { PureComponent } from "react";
import PropTypes from 'prop-types'

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

class Chart extends PureComponent {
  lineColors = () => ["#ff9800", "#90caf9", "#5d4037", "#81c784", "#673ab7"];

  buildData = () => {
    const dayData = [...this.props.dayData];
    const dataLength = dayData[0].quotes.length;
    const coinCount = dayData.length;
    let data = [];

    //  Set the times
    for (let i = 0; i < dataLength; i++) {
      let time = dayData[0].quotes[i].time;
      time = time[0] + time[1] + ":" + time[2] + time[3];
      data.push({ time });
    }

    for (let i = 0; i < dataLength; i++) {
      // Get all the coin values of this time

      /*
        BTC : '123123'
        ETC : '123123'
      */
      const coinData = {};
      this.props.dayData.forEach(field => {
        coinData[field.currency] = field.quotes[i].price;
      });

      data[i] = { ...data[i], ...coinData };
    }

    //   Modify data

    console.log(data);
    return data;
  };

  render() {
    if (!this.props.dayData) return null;

    return (
      <LineChart
        width={800}
        height={450}
        data={this.buildData()}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Legend />
        {this.props.dayData.map((coinData, i) => (
          <Line dataKey={coinData.currency} stroke={this.lineColors()[i]} />
        ))}
      </LineChart>
    );
  }
}

Chart.propTypes = {
    dayData : PropTypes.arrayOf(PropTypes.shape({
        currency: PropTypes.string.isRequired,
        quotes : PropTypes.arrayOf(PropTypes.shape({
          time : PropTypes.string,
          price : PropTypes.number
        }))
    }))
}

export default Chart;
