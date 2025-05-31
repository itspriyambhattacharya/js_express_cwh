const express = require("express");
const blogs = require("./routes/blog");
const app = express();
const port = 3000;

app.use(express.static("public")); // serving public files such as html, css, js or img
app.use("/blog", blogs); // Creating routes using Express.js Router

app.get("/", (req, res) => {
  console.log("It's a get request");

  //   res.send("Hello Priyam");
  res.sendFile("/public/templates/index.html", { root: __dirname });
});

app.get("/contact", (req, res) => {
  res.redirect("/");
});

app.post("/contact", (req, res) => {
  res.send("Hello post");
  console.log("It's a post request");
});

app.listen(port, () => {
  console.log("App listening in port ", port);
});
