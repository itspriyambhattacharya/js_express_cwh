const express = require("express"); // import express.js framework
const app = express(); // initialize express app
const port = 3000; // configure the port

app.set("view engine", "ejs");
app.use(express.static("public"));

const idx = require("./routes/index");

app.use("/", idx);

app.listen(port, () => {
  console.log(`App listening in port ${port}`);
});
