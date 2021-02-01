const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const expressJwt = require("express-jwt");
const cors = require("cors");
const connectString =
  "mongodb://mateussmntt:elt1a2015@cluster0-shard-00-00.njotv.mongodb.net:27017,cluster0-shard-00-01.njotv.mongodb.net:27017,cluster0-shard-00-02.njotv.mongodb.net:27017/treinamento_react?ssl=true&replicaSet=atlas-23d88y-shard-0&authSource=admin&retryWrites=true&w=majority";

mongoose.connect(connectString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());
app.use(cors());
app.use(
  expressJwt({
    secret: `^b,"ziX$%EXJ:RH/tS[IHeqn"'^^/8`,
    algorithms: ["HS256"],
  }).unless({
    path: ["/auth", "/auth/login", "/product"],
  })
);

const authRouter = require("./src/routes/auth");
app.use("/auth", authRouter);

const userRouter = require("./src/routes/user");
app.use("/user", userRouter);

const productRouter = require("./src/routes/product");
app.use("/product", productRouter);

app.listen(4000, function () {
  console.log("funcionou - ouvindo porta 4000");
});
