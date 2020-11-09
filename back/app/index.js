const express = require("express");
const app = express();
const cors = require("cors")

app.use(cors({ origin: "http://localhost:1337/products" }))
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); next();
});

require("./configure")(app);

// ROUTES MIDDLEWARE
app.use("/api", require("../routes"));

app.get("/*", (req, res) => {
  res.sendFile(app.get("indexHTMLPath"));
});

module.exports = app;
