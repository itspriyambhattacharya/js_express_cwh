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
  const sql = `INSERT INTO users (name, email, password, yrIncome, gender) VALUES (?,?,?,?,?)`;
  const values = [name, email, password, yr_income, vehicle, gender];
  pool.query(sql, values, (err, results, fields) => {
    if (err) {
      console.log("Insertion to Database failed due to ", err.message);
      res.status(500).send("Database error");
      return;
    }
    console.log("Record inserted succesfully");
  });

  res.redirect("/success");
});

route.get("/success", (req, res) => {
  res.send("Registered Successfully.");
});

module.exports = route;
