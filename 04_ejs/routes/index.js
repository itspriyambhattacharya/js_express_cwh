const express = require("express");
const route = express.Router();

route.use((req, res, next) => {
  console.log("Route middleware");
  next();
});

route.get("/", (req, res) => {
  res.render("index");
});

module.exports = route;
