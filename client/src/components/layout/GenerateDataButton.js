import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { createCryptoData } from "../../actions/cryptoActions";

export class GenerateDataButton extends Component {
  render() {
    return (
      <button type="button" class="btn btn-deep-orange btn-lg" onClick={this.props.createCryptoData}>
        Generate New Crypto Trading Data
      </button>
    );
  }
}

export default connect(
  null,
  {
    createCryptoData
  }
)(GenerateDataButton);
