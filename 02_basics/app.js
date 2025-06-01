const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public")); // build-in middleware to fetch public files
app.use(express.urlencoded({ extended: true })); // built-in middleware to fetch form data

app.set("view engine", "ejs"); // set view engine

const blogs = require("./routes/blog");
const index = require("./routes/index");

app.use("/blog", blogs); // Creating routes using Express.js Router
app.use("/", index);

app.listen(port, () => {
  console.log("App listening in port ", port);
});
