const express = require("express"); // import express.js framework
const app = express(); // initialize express app
const port = 3000; // configure the port

app.get("/", (req, res) => {
  res.send("Hello Priyam");
});

app.listen(port, () => {
  console.log(`App listening in port ${port}`);
});
