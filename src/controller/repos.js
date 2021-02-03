"use strict";
const utils = require("../utils/repos");

exports.getRepos = async (req, res, next) => {
  try {
    let cSharpRepos = await utils.getRepos();
    res.status(200).send(cSharpRepos);
  } catch (err) {
    res.status(500).send({
      message: "Ops, something went wrong!",
      error: err,
    });
  }
};
