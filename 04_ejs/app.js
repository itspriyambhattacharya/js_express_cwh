const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");

const idx = require("./routes/index");
const abt = require("./routes/about");

app.use("/", idx);
app.use("/about", abt);

app.listen(port, () => {
  console.log("App is listening on port", port);
});
