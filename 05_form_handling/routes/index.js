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

route.post("/", (req, res) => {
  console.log(req.body); // contains the data that came from form submission in object form
  // object destructuring to store the values in separate variables
  const { name, email, password } = req.body;
  console.log(`Name is: ${name}`);
  console.log(`Email is: ${email}`);
  console.log(`Password is: ${password}`);

  res.redirect("/");
});

module.exports = route;
