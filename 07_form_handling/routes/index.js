const { log } = require("console");
const express = require("express");
const route = express.Router();
const mysql2 = require("mysql2");

const pool = mysql2.createPool({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "mysql12345678",
  database: "registration_db",
  connectionLimit: 10,
});

// middleware
route.use((req, res, next) => {
  console.log("Index middleware");
  next();
});

route.get("/", (req, res) => {
  res.render("index");
});

route.post("/", (req, res) => {
  console.log(req.body);
  const { name, email, password, yr_income, vehicle, gender } = req.body;
  console.log("Yearly income is", yr_income);

  res.redirect("/");
});

module.exports = route;
