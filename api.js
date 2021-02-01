const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const expressJwt = require("express-jwt");
const cors = require("cors");
const connectString = process.env.MONGO_URI;

mongoose.connect(connectString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());
app.use(cors());
app.use(
  expressJwt({
    secret: process.env.JWT_SECRET,
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
