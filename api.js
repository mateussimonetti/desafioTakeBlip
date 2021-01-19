const express = require("express");
const app = express();
const bodyParser = require("body-parser");

var USERS = [
  {
    id: 1,
    username: "Mateus Simonetti",
    password: "123456",
  },
  {
    id: 2,
    username: "Mauro Simonetti",
    password: "24091999",
  },
];

var greeting = [{ msg: "Hello world!" }];

//Funções
function greet() {
  return greeting;
}
function getUsers() {
  return USERS;
}

app.use(bodyParser.json());

//Requisições
app.get("/", function (req, res) {
  res.send(greet());
});
app.get("/users", function (req, res) {
  res.send(getUsers());
});
app.listen(4000, function () {
  console.log("funcionou - ouvindo porta 4000");
});
