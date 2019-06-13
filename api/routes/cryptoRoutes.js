const express = require("express");
const router = express.Router();
const TradingDay = require("../../models/TradingDay");
const cryptoData = require('../cryptoLogic/cryptoData');

// @route   GET /api/crypto/ping
// @desc    test route
// @access  Public

router.get("/ping", (req, res) => {
  res.json({
    msg: "pong"
  });
});

// @route   GET /api/crypto
// @desc    Get the crypto data
// @access  Public

router.get("/", async (req, res) => {
  TradingDay.find({})
    .then(cryptoData => res.json({ cryptoData }))
    .catch(err => res.status(400));
});

// @route   POST /api/crypto
// @desc    Create new data and erase the old data
// @access  Public

router.post("/", async (req, res) => {
  const data = cryptoData()
  try {
    // Drop collection

    await TradingDay.collection.drop();
    await TradingDay.insertMany(data);
    const cryptoData = await TradingDay.find({});

    res.json({
      cryptoData
    });
  } catch (err) {
    console.log(err);
    res.status(400)
  }
});

module.exports = router;
