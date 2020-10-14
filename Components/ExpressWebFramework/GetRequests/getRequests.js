const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/example", (req, res) => {
  res.send("Hitting example route!");
});

app.get("/example/:name/:age", (req, res) => {
  console.log("params", req.params);
  console.log("query", req.query);
  res.send(`Your name is ${req.params.name} and age is ${req.params.age}`);
});

app.listen(4000);
