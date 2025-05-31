const express = require("express");
const path = require("path");
const router = express.Router();

// middleware that is specific to this router
const timeLog = (req, res, next) => {
  console.log("Time: ", Date.now());
  next();
};
router.use(timeLog);

router.get("/", (req, res) => {
  console.log("It's a get request");
  //   res.send("Hello Priyam");
  res.sendFile(path.join(__dirname, "../public/templates/index.html"));
  console.log(__dirname);
});

router.get("/about", (req, res) => {
  res.send("About Page");
});

router.get("/contact", (req, res) => {
  res.redirect("/");
});

router.post("/contact", (req, res) => {
  res.send("Hello post");
  console.log("It's a post request");
});

module.exports = router;
