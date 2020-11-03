const express = require("express");
const app = express();
const path = require("path");

require("./configure")(app);

// ROUTES MIDDLEWARE
app.use("/api", require("../routes"));

app.get("/*", (req, res) => {
  res.sendFile(app.get("indexHTMLPath"));
});

module.exports = app;
