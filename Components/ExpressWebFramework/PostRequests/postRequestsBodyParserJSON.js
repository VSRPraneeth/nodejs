const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

app.use("/public", express.static(path.join(__dirname, "Static")));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "Static", "form.html"));
});

app.post("/", (req, res) => {
  console.log(req.body.email, req.body.password);
  // DB Work

  res.send({ success: true });
});

app.listen(4000);
