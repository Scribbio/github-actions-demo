const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/test", (_req, res) => {
  res.status(200).send("Hello world");
});

app.get("/Goodbye", (_req, res) => {
  res.status(200).send("GoodBye world");
});

app.listen(port, () => console.log("Example app listening on port 3000!"));
