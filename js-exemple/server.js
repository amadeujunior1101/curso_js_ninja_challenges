const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, "public" )));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/challenge-28/index.html");
});

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});
