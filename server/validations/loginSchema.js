const Joi = require("joi");

const loginSchema = (user) => {
  const schema = Joi.object({
    email: Joi.string().min(6).max(50).required().email(),
    password: Joi.string().min(6).max(1024).required(),
  });
  return schema.validate(user);
};

module.exports = loginSchema;
