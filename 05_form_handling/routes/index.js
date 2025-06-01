const express = require("express");
const route = express.Router();

// middleware
route.use((req, res, next) => {
  console.log("index router middleware");
  next();
});

route.get("/", (req, res) => {
  res.render("index");
});

module.exports = route;
