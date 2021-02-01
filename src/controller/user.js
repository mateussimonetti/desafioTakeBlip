"use strict";
const repository = require("../repository/user");
const jwt = require("jsonwebtoken");
const md5 = require("md5");

exports.getAllUsers = async (req, res, next) => {
  try {
    let dbReturn = await repository.getAll();
    res.status(200).send(dbReturn);
  } catch (err) {
    res.status(500).send({
      message: "Ops, something went wrong!",
      error: err,
    });
  }
};

exports.addUser = async (req, res, next) => {
  try {
    let user = req.body;
    user.password = md5(user.password + process.env.PASSWORD_SALT);
    let created = await repository.create(user);
    res.status(200).send(created);
  } catch (err) {
    res.status(500).send({
      message: "Ops, something went wrong!",
      error: err,
    });
  }
};

async function parserBodyUserCreate(body) {
  return {
    name: body.name,
    email: body.email,
  };
}

exports.editUser = async (req, res, next) => {
  try {
    let edited = await repository.edit(req.params.id, req.body);
    res.status(200).send({
      message: "User edited",
      data: edited,
    });
  } catch (err) {
    res.status(500).send({
      message: "Ops, something went wrong!",
      error: err,
    });
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    let deleted = await repository.delete(req.params.id);
    res.status(200).send({
      message: "User successfully deleted",
      data: deleted,
    });
  } catch (err) {
    res.status(500).send({
      message: "Ops, something went wrong!",
      error: err,
    });
  }
};

exports.virtualDeleteUser = async (req, res, next) => {
  try {
    let disabled = await repository.virtualDelete(req.params.id);
    res.status(200).send({
      message: "User successfully disabled",
      data: disabled,
    });
  } catch (err) {
    res.status(500).send({
      message: "Ops, something went wrong!",
      error: err,
    });
  }
};

exports.login = async (req, res, next) => {
  try {
    console.log(req.body);
    const user = await repository.autenticate({
      email: req.body.email,
      password: md5(req.body.password + process.env.PASSWORD_SALT),
    });

    if (!user) {
      res.status(404).send({
        message: "Usuário ou Senha inválidos ",
      });
      return;
    }
    var token = jwt.sign({ userID: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.status(201).send({
      token: token,
    });
  } catch (err) {
    res.status(500).send({
      message: "Ops, something went wrong!",
      error: err,
    });
  }
};
