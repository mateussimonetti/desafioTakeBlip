"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productModel = new Schema(
  {
    user: { type: Schema.Types.ObjectId, required: "true" },
    title: { type: String, required: true, trim: true },
    price: { type: String, required: true },
    description: { type: String, required: true },
    buyURL: { type: String, required: false, trim: true },
    status: { type: Boolean, required: true, default: true },
    creationDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);

productModel.pre("save", (next) => {
  //   let now = new Date();
  //   if (!this.creationDate) {
  //     this.creationDate = now;
  //   }
});

module.exports = mongoose.model("product", productModel);
