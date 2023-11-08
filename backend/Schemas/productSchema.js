const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: String,
    price: String,
    category: String,
    userId: String,
    company: String,
  },
  { timestamps: true }
);

const product = mongoose.model("PRODUCT", productSchema);

module.exports = product;
