const jwt = require("jsonwebtoken");

const SECRET = "secretKey";

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || SECRET, {
    expiresIn: process.env.JWT_EXP || "7d",
  });
};

const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT_SECRET || SECRET, (err, token) => {
      if (err) reject(err);
      resolve(token);
    });
  });
};

module.exports = { generateToken, verifyToken };
