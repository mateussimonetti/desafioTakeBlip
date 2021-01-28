const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const connectString =
  "mongodb://mateussmntt:elt1a2015@cluster0-shard-00-00.njotv.mongodb.net:27017,cluster0-shard-00-01.njotv.mongodb.net:27017,cluster0-shard-00-02.njotv.mongodb.net:27017/treinamento_react?ssl=true&replicaSet=atlas-23d88y-shard-0&authSource=admin&retryWrites=true&w=majority";
mongoose.connect(connectString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userRouter = require("./src/routes/user");
const productRouter = require("./src/routes/product");

app.use(bodyParser.json());

app.use("/user", userRouter);
app.use("/product", productRouter);

app.listen(4000, function () {
  console.log("funcionou - ouvindo porta 4000");
});
