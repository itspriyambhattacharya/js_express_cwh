const express = require("express");
const app = express();
const blogs = require("./routes/blog");
const index = require("./routes/index");
const port = 3000;

app.use(express.static("public")); // serving public files such as html, css, js or img
app.use("/blog", blogs); // Creating routes using Express.js Router
app.use("/", index);

app.listen(port, () => {
  console.log("App listening in port ", port);
});
