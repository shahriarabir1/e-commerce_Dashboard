const products = require("../../Schemas/productSchema");
const {verifyToken}=require('./VerifyToken')
const SearchController = async (req, res) => {
  let result = await products.find({
    $or: [
      { name: { $regex: req.params.key, $options: "i" } },
      { company: { $regex: req.params.key, $options: "i" } },
      { price: { $regex: req.params.key, $options: "i" } },
      { type: { $regex: req.params.key, $options: "i" } },
    ],
  });
  res.send(result);
};

module.exports = { SearchController };
