const user = require("../../Schemas/userSchema");
const loginController = async (req, res) => {
  if (req.body.email && req.body.password) {
    let User = await user.findOne(req.body).select("email firstname");
    if (User) {
      res.send(User);
    } else {
      res.status(400).json({ error: "Wrong Credentials" });
    }
  } else {
    res.status(400).json({ error: "Please enter email or password" });
  }
};

module.exports = { loginController };
