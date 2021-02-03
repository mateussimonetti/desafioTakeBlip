const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors());

const repoRouter = require("./src/routes/repos");
app.use("/repos", repoRouter);

app.listen(4000, function () {
  console.log("funcionou - ouvindo porta 4000");
});
