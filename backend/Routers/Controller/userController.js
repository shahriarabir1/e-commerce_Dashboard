const People = require("../../Schemas/userSchema");

const userController = async (req, res) => {
  let user = new People(req.body);
  let result = await user.save();
  res.send(result);
};

module.exports = { userController };
