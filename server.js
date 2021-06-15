const express = require("express");
var path = require("path");
const port = process.env.PORT || 80;
const app = express();

app.use(express.static(path.join(__dirname, "dist/tesis")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "/dist/tesis/index.html"));
});

app.listen(port, () => {
  console.log("server started");
  console.log(port);
});
