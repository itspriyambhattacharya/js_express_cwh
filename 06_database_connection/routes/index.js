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

route.post("/", (req, res) => {
  // console.log(req.body);
  const { name, email, password } = req.body; // here 'name', 'email', etc are the names given in the HTML input elements. If in the HTML input tag, the name given as 'myName' etc, the here, in req,body the keys would be myName, myEmail... etc
  console.log(`Name is ${name}`);

  res.redirect("/");
});

module.exports = route;
