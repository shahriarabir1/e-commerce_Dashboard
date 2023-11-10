const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: String,
    price: String,
    type: String,
    userId: String,
    company: String,
  },
  { timestamps: true }
);

const product = new mongoose.model("PRODUCT", productSchema);

module.exports = product;
