const products = require("../../Schemas/productSchema");

const productController = async (req, res) => {
  let product = new products(req.body);
  let result = await product.save();
  if (result) {
    res.send(result);
  } else {
    res.status(400).json({ error: "Can not add product" });
  }
};

module.exports = { productController };
