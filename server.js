const express = require("express");
const path = require("path");

const app = express();

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.use("/assets", express.static("./assets"));

app.listen(3000);
console.log("listening on http://localhost:3000");