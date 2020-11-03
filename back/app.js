const express = require("express");
const app = express();
const morgan = require("morgan");

// STATIC FILE SERVICE MIDDLEWARE
app.use(express.static("public"));

// LOGGER MIDDLEWARE
app.use(morgan("tiny"));

// BODY PARSER MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTES MIDDLEWARE
// app.use("/api", require("./routes"));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

module.exports = app;
