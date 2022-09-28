const User = require("../models/userModel");
const registerSchema = require("../validations/registerSchema");
const loginSchema = require("../validations/loginSchema");
const { generatePassword, comparePassword } = require("../config/bcrypt");
const { generateToken, verifyToken } = require("../config/token");

//register
const register = async (req, res) => {
  try {
    const { error } = registerSchema(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const { name, email, password } = req.body;

    const emailExist = await User.findOne({ email });
    if (emailExist)
      return res.status(400).json({ error: "Email already exists" });

    const usernameExist = await User.findOne({
      username,
    });
    if (usernameExist)
      return res.status(400).json({ error: "Username already exists" });

    const hashedPassword = await generatePassword(password);

    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    if (user) {
      res.status(201).json({
        _id: user._id,
        username: user.username,
        email: user.email,
        token: generateToken(user._id),
      });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//login
const login = async (req, res) => {
  try {
    const { error } = loginSchema(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (user && (await comparePassword(password, user.password))) {
      res.status(200).json({
        _id: user._id,
        username: user.username,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.status(400).send("Email or password is incorrect");
    }
  } catch (err) {
    return res.status(401).send("Something went wrong");
  }
};

module.exports = { register, login };
