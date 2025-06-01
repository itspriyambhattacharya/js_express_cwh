const express = require("express"); // import express.js framework
const app = express(); // initialize express app
const port = 3000; // configure the port

app.set("view engine", "ejs"); //  set the view engine
app.use(express.static("public")); // use for build-in middleware

const idx = require("./routes/index"); // import the file

app.use("/", idx);

app.listen(port, () => {
  console.log(`App listening in port ${port}`);
});
