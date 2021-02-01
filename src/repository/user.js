"use strict";

const User = require("../models/user");
const projection = "_id name email creationDate";

exports.getAll = async () => {
  return await User.find({ status: true });
};

exports.create = async (data) => {
  let user = new User(data);
  return await user.save();
};

exports.edit = async (id, data) => {
  console.log("Entrou");
  console.log("data._id: ", id);
  let targetUser = await User.findById(id);
  console.log("targetUser: ", targetUser);
  console.log("data: ", data);
  for (var key in targetUser) {
    if (data[key]) {
      targetUser[key] = data[key] || targetUser[key];
    }
  }
  console.log("new targetUser: ", targetUser);

  return await targetUser.save();
};

exports.delete = async (id) => {
  return await Product.findByIdAndDelete(id);
};

exports.virtualDelete = async (id) => {
  return await User.findByIdAndUpdate(id, {
    $set: { status: false },
  });
};

exports.autenticate = async (data) => {
  return await User.findOne({
    email: data.email,
    password: data.password,
  });
};
