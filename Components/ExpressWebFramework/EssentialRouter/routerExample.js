const express = require("express");
const path = require("path");
const app = express();
const people = require("../../../Routes/people");

app.use("/public", express.static(path.join(__dirname, "Static")));
app.set("view engine", "ejs");

app.use("/people", people);

app.listen(4000);
