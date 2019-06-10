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
  } 
});

module.exports = User = mongoose.model('TradingDay', TradingDaySchema);