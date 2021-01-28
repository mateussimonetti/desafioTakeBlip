"use strict";
const repository = require("../repository/user");

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
    let created = await repository.create(req.body);
    res.status(200).send(created);
  } catch (err) {
    res.status(500).send({
      message: "Ops, something went wrong!",
      error: err,
    });
  }
};

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
