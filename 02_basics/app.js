const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public")); // serving public files such as html, css, js or img

app.get("/", (req, res) => {
  console.log("It's a get request");

  //   res.send("Hello Priyam");
  res.sendFile("/templates/index.html", { root: __dirname });
});

app.post("/", (req, res) => {
  res.send("Hello post");
  console.log("It's a post request");
});

app.listen(port, () => {
  console.log("App listening in port ", port);
});
