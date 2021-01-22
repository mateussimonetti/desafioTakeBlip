"use strict";

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

function getUsers() {
  return USERS;
}

exports.get = async (req, res, next) => {
  console.log("controller do user");
  res.send(getUsers());
};
