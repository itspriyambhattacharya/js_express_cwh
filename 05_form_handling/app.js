const express = require("express"); // import express.js framework
const app = express(); // initialize express app
const port = 3000; // configure the port

app.set("view engine", "ejs"); // set the view engine
app.use(express.static("public")); // serve static files

app.use(express.urlencoded({ extended: true })); // parse URL-encoded form data

const idx = require("./routes/index"); // import the router

app.use("/", idx); // use the router

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
