const express = require("express");
const route = express.Router();
const mysql2 = require("mysql2");

// Create a MySQL connection pool
const pool = mysql2.createPool({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "mysql12345678",
  database: "college2",
});

// middleware
route.use((req, res, next) => {
  console.log("Index middleware");
  next();
});

// GET route
route.get("/", (req, res) => {
  res.render("index");
  pool.query("SELECT * FROM student", (err, rows, fields) => {
    if (err) {
      console.log("Database Query Error: ", err.message);
    }
    // console.log(rows);
    rows.forEach((obj) => {
      console.log(`Roll Number is: ${obj.rollNo}`);
      console.log(`Name is: ${obj.name}`);
      console.log(`Marks is: ${obj.marks}`);
      console.log(`City is: ${obj.city}`);
      console.log("\n");
    });
  });
});

// POST route
route.post("/", (req, res) => {
  const { name, email, password } = req.body;
  console.log(`Name is ${name}`);

  res.redirect("/");
});

module.exports = route;
