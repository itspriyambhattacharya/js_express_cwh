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

const pool2 = mysql2.createPool({
  host: "localhost",
  user: "root",
  password: "mysql12345678",
  port: 3306,
  connectionLimit: 10,
});

// middleware
route.use((req, res, next) => {
  console.log("Index middleware");
  next();
});

// GET route
route.get("/", (req, res) => {
  res.render("index");
  pool.query("SELECT * FROM student", (err, results, fields) => {
    if (err) {
      console.log("Database Query Error: ", err.message);
      return;
    }
    // console.log(rows);
    results.forEach((obj) => {
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
  const sql = `INSERT INTO dt1 (cname, cpassword, cemail) VALUES (${name}, ${password}, ${email})`;
  pool2.query(sql, (err, rows, fields) => {
    if (err) {
      console.log("Can't insert record because ", err.message);
      return;
    }
    console.log("Record Inserted successfully");
    alert("Record Inserted successfully.");
  });
  console.log(`Name is ${name}`);

  res.redirect("/");
});

module.exports = route;
