const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello Priyam");
});

app.listen(port, () => {
  console.log("App listening in port ", port);
});
