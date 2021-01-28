"use strict";
const repository = require("../repository/product");

exports.getAllProducts = async (req, res, next) => {
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

exports.addProduct = async (req, res, next) => {
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

exports.editProduct = async (req, res, next) => {
  try {
    let edited = await repository.edit(req.params.id, req.body);
    res.status(200).send(edited);
  } catch (err) {
    res.status(500).send({
      message: "Ops, something went wrong!",
      error: err,
    });
  }
};

exports.deleteProduct = async (req, res, next) => {
  try {
    let deleted = await repository.delete(req.params.id);
    res.status(200).send(deleted);
  } catch (err) {
    res.status(500).send({
      message: "Ops, something went wrong!",
      error: err,
    });
  }
};

exports.virtualDeleteProduct = async (req, res, next) => {
  try {
    let deleted = await repository.virtualDelete(req.params.id);
    res.status(200).send(deleted);
  } catch (err) {
    res.status(500).send({
      message: "Ops, something went wrong!",
      error: err,
    });
  }
};
