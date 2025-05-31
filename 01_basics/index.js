const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Priyam</h1>");
});

// Creating pages for our site

app.get("/contact", (req, res) => {
  res.send("Thanks for contacting us, we'll reach you shortly");
});

app.listen(port, () => {
  console.log(`Myapp listening on port ${port}`);
});
