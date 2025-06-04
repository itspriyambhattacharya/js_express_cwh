const { log } = require("console");
const express = require("express");
const route = express.Router();

// middleware
route.use((req, res, next) => {
  console.log("Index middleware");
  next();
});

route.get("/", (req, res) => {
  res.render("index");
});

module.exports = route;
