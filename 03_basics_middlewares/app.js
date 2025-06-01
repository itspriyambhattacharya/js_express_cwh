const express = require("express");
const app = express();
const port = 3000;

const idx = require("./routes/index");

app.use(express.json()); // Build-in middleware
app.use(express.urlencoded({ extended: true })); // Built-in middleware
app.use(express.static("public"));

app.set("view engine", "ejs");
app.use("/", idx);

// Error handing middleware
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(404).send("Page not found");
});

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send("Internal server error");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
