const user = require("../../Schemas/userSchema");
const JWT = require("jsonwebtoken");
const loginController = async (req, res) => {
  if (req.body.email && req.body.password) {
    let User = await user.findOne(req.body).select("_id email firstname");
    if (User) {
      JWT.sign(
        { User },
        process.env.JWTKEY,
        { expiresIn: "2h" },
        (err, token) => {
          if (!err && token) {
            res.send({ User, token });
          }
        }
      );
    } else {
      res.status(400).json({ error: "Wrong Credentials" });
    }
  } else {
    res.status(400).json({ error: "Please enter email or password" });
  }
};

module.exports = { loginController };
