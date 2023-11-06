const error = require("http-errors");
function notfoundHandler(req, res, next) {
  next(error(404, "Not found"));
}

function errorHandler(err, req, res, next) {
  res.send(err);
}

module.exports = { notfoundHandler, errorHandler };
