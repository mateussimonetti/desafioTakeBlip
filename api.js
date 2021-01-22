const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const userRouter = require("./src/routes/user");
const productRouter = require("./src/routes/product");

app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send(greet());
});

app.use("/user", userRouter);

app.listen(4000, function () {
  console.log("funcionou - ouvindo porta 4000");
});
