const express = require("express");
const path = require("path");
const app = express();

app.use("/public", express.static(path.join(__dirname, "Static")));
app.set("view engine", "ejs");
app.get("/:userQuery", (req, res) => {
  res.render("example", {
    data: {
      userQuery: req.params.userQuery,
      searchResults: ["book1", "book2", "book3"],
      loggedIn: true,
      userName: "Praneeth",
    },
  });
});

app.listen(4000);
