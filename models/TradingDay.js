const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const TradingDaySchema = new Schema({
  data: {
    type: Array,
    default : []
  },
  date: {
    type: String,
    default: "20190601"
  },
  bestTrades: {
    type: Array,
    default : []
  },
  winnerTrade : {
      type : Object,
      default : {}
  }
});

module.exports = User = mongoose.model('TradingDay', TradingDaySchema);