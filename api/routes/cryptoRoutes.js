const express = require("express");
const router = express.Router();
const TradingDay = require("../../models/TradingDay");

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
  try {
    // Drop collection
    console.log('1')
    await TradingDay.collection.drop();
    console.log('2')
    await TradingDay.insertMany(req.body.data);
    console.log('3')
    const cryptoData = await TradingDay.find({});
    console.log('4')

    res.json({
      cryptoData
    });
  } catch (err) {
    console.log(err)
    res.send(err);
  }
});

module.exports = router;
