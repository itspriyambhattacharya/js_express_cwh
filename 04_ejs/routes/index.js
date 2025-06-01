const express = require("express");
const route = express.Router();

route.use((req, res, next) => {
  console.log("Route middleware");
  next();
});

route.get("/", (req, res) => {
  const obj = {
    firstName: "Priyam",
    lastName: "Bhattacharya",
    age: 23,
    hobbies: ["H1", "H2", "H3"],
  };
  res.render("index", { test: obj });
});

module.exports = route;
