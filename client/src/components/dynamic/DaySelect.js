import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import TradingDay from "./TradingDay";

export class DaySelect extends Component {
  state = {
    selectedDay: 0
  };

  selectDay = index =>
    this.setState({
      selectedDay: index
    });

  render() {
    if (this.props.crypto.length < 1) return null;

    return (
      <div className="container-fluid text-center mt-3 mb-3 all-days">
        <div className="row">
          <div className="col d-flex justify-content-center">
            <div className="btn-group" role="group" aria-label="Basic example">
              {this.props.crypto.map((day, i) => (
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => this.selectDay(i)}
                >
                  Day {i + 1}
                </button>
              ))}
            </div>
          </div>
        </div>

        <TradingDay day={this.props.crypto[this.state.selectedDay]} />
      </div>
    );
  }
}

DaySelect.propTypes = {
  crypto: PropTypes.array
};

const mapStateToProps = state => ({
  crypto: state.crypto
});

export default connect(mapStateToProps)(DaySelect);
