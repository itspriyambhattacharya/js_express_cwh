const express = require("express");
const route = express.Router();

// middleware
const mid = (req, res, next) => {
  console.log("About Middleware");
  next();
};

route.use(mid);

route.get("/", (req, res) => {
  res.render("about");
});

module.exports = route;
