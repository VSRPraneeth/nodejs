const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

app.use("/public", express.static(path.join(__dirname, "BodyParser")));

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "BodyParser", "form.html"));
});

app.post("/", (req, res) => {
  console.log(req.body.email, req.body.password);
  // DB Work

  res.send("Successfully posted data");
});

app.listen(4000);
