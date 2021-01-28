"use strict";

const Product = require("../models/product");

exports.getAll = async () => {
  return await Product.find({ status: true });
};

exports.create = async (data) => {
  let product = new Product(data);
  return await product.save();
};

exports.edit = async (id, data) => {
  let targetProduct = await Product.find({ _id: id });
  console.log("targetProduct: ", targetProduct);
  console.log("data: ", data);
  for (var key in targetProduct) {
    if (data[key]) {
      targetProduct[key] = data[key] || targetProduct[key];
    }
  }
  console.log("new targetProduct: ", targetProduct);

  return await Product.save();
};

exports.delete = async (id) => {
  return await Product.findByIdAndDelete(id);
};

exports.virtualDelete = async (id) => {
  return await Product.findByIdAndUpdate(id, {
    $set: { status: false },
  });
};
