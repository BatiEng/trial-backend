const express = require("express");
const cors = require("cors");

const app = express();

app.get("/", (req, res) => {
  res.send("batikan");
});

app.listen(3000, () => {
  console.log("app is listening");
});
