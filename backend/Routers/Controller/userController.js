const People = require("../../Schemas/userSchema");

const userController = async (req, res) => {
  try {
    let user = new People(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    res.send(result);
  } catch (error) {
    res.send(error);
  }
};

module.exports = { userController };
