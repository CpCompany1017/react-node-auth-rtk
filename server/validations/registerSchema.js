const Joi = require("joi");

const registerSchema = (user) => {
  const schema = Joi.object({
    username: Joi.string().min(2).max(20).required(),
    email: Joi.string().min(6).max(50).required().email(),
    password: Joi.string().min(6).max(1024).required(),
  });
  return schema.validate(user);
};

module.exports = registerSchema;
