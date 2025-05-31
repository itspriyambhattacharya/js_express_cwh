const express = require("express");
const router = express.Router();
const path = require("path");

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/templates/index.html"));
});

router.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/templates/contact.html"));
});

module.exports = router;
