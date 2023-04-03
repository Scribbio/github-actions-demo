const express = require("express");
const app = express();

app.get("/hello", (_req, res) => {
  res.status(200).send("Hello w0rld");
});

app.get("/goodbye", (_req, res) => {
  res.status(200).send("Good Bye");
});

module.exports = app;
