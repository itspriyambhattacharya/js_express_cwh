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

app.get("/about", (req, res) => {
  res.send("About Us");
});

app.get("/blog", (req, res) => {
  const data = res;
  console.log(data);

  res.send("Blog");
});

app.get("/blog/:slug", (req, res) => {
  const p = req;
  const data = req.params; // object
  const val = data.slug;

  // res.send(`Blog object: ${JSON.stringify(data)}`);
  res.send(`Blog: ${val}`);
  console.log(p);
  console.log(req.query);
});

app.listen(port, () => {
  console.log(`Myapp listening on port ${port}`);
});
