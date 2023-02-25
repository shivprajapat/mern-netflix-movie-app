const jwt = require('jsonwebtoken');
const env = require('../config/envConfig');
const status = require('../helper/api.responses')

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, env.SECRET_KEY, (err, user) => {
      if (err) res.status(status.Forbidden).json("Token is not valid!");
      req.user = user;
      next();
    });
  } else {
    return res.status(status.Unauthorized).json("You are not authenticated!");
  }
}

module.exports = verifyToken 