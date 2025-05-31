const express = require("express");
const app = express();
const port = 3000;

const idx = require("./routes/index");

app.use(express.static("public"));
app.use("/", idx);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
