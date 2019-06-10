const express = require("express");
const router = express.Router();

// @route   GET /api/crypto/ping
// @desc    test route
// @access  Public

router.get("/ping", (req, res) => {
  res.send("pong");
});

module.exports = router;
