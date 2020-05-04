const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect("mongodb://user:password1@ds049467.mlab.com:49467/heroku_lx01qq9q", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes here
app.use(require("./routes/api.js"));


app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});