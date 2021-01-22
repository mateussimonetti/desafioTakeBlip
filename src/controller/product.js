"use strict";

var greeting = [{ msg: "Hello world!" }];

function greet() {
  return greeting;
}

exports.get = async (req, res, next) => {
  console.log("controller do product");
  res.send(greet());
};
