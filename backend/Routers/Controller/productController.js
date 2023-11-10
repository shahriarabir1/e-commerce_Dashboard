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
const ProductListController = async (req, res) => {
  let Product = await products.find().select("name price type company _id");
  if (Product.length > 0) {
    res.send(Product);
  } else {
    res.send({ result: "No Product Found" });
  }
};

const ProductDeleteController = async (req, res) => {
  try {
    await products.deleteMany({});
    res.status(200).json({ message: "Deleted all items" });
  } catch (error) {
    res.status(404).json({ error: "There is a problem in server side" });
  }
};

const ProductDelete = async (req, res) => {
  try {
    const id = req.params.id;
    await products.deleteOne({ _id: id });
    res.status(200).json({ message: "Deleted" });
  } catch (error) {
    res.status(404).json({ error: "There is a problem" });
  }
};

const ProductUpdate = async (req, res) => {
  const product = await products.findOneAndUpdate(
    { _id: req.params.id },
    { $set: req.body }
  );
  if (product) {
    res.send(product);
  } else {
    res.send("There is not found any data");
  }
};
const ProductGet = async (req, res) => {
  const product = await products.findOne({ _id: req.params.id });
  if (product) {
    res.send(product);
  } else {
    res.send("There is not found any data");
  }
};
module.exports = {
  productController,
  ProductListController,
  ProductDeleteController,
  ProductDelete,
  ProductUpdate,
  ProductGet,
};
