const JWT = require("jsonwebtoken");
function verifyToken(req, res, next) {
  let token = req.headers["authorization"];
  if (token) {
    token.split(" ")[1];
    JWT.verify(token, process.env.JWTKEY, (err, valid) => {
      if (!err) {
        next();
      } else {
        res.send({ error: "Please give a proper authorization" });
      }
    });
  } else {
    res.send({ error: "Please authorized first" });
  }
}

module.exports = { verifyToken };
