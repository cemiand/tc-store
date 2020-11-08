const express = require("express");
const app = express();
const cors = require("cors")

app.use(
  cors({
    origin: '*',
    methods: "GET, POST, PATCH, DELETE, PUT",
    allowedHeaders: "Content-Type, Authorization",

  }))



require("./configure")(app);

// ROUTES MIDDLEWARE
app.use("/api", require("../routes"));

app.get("/*", (req, res) => {
  res.sendFile(app.get("indexHTMLPath"));
});

module.exports = app;
