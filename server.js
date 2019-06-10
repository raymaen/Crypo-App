const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const logger = require('morgan');
const cryptoRoutes = require("./api/routes/cryptoRoutes");

const db = 'mongodb://localhost:27017/crypto-nab'

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => console.log("DB connected succesfully!"))
  .catch(err => console.log("Db connection error"));

const port = process.env.PORT || "5000";

// Body parser
app.use(express.json());

// Logger
app.use(logger('combined'))

// Routes
app.use("/api/crypto", cryptoRoutes);


// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static(path.join(__dirname, "client", "build")))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Server started on port ${port}`));