const express = require("express");
const path = require("path");
const Joi = require("joi");
const bodyParser = require("body-parser");
const app = express();

app.use("/public", express.static(path.join(__dirname, "BodyParserJson")));

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "BodyParserJson", "form.html"));
});

app.post("/", (req, res) => {
  const schema = Joi.object().keys({
    email: Joi.string().trim().email().required(),
    password: Joi.string().min(5).max(10).required(),
  });

  const validation = schema.validate(req.body);
  if (validation.error) {
    console.log(validation.error);
    res.send("An error has occurred");
  } else {
    console.log(validation.value);
    res.send("Successfully Posted Data");
  }
});

app.listen(4000);
