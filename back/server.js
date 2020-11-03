const express = require("express");
const app = express();
const chalk = require("chalk");
require("./db/db");

const PORT = 1337;
app.listen(PORT, () =>
  console.log(chalk.blue("Server listen in port"), chalk.bgBlue(PORT))
);