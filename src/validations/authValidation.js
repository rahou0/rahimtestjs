const Joi = require("joi");

const registerValidation = (data) => {
  const schema = Joi.object({
    fullname: Joi.string().max(60).min(6).required(),
    email: Joi.string().max(255).min(5).required().email(),
    password: Joi.string()
      .max(60)
      .min(8)
      .required()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
    gender: Joi.string().max(10).min(4).required().default("male"),
    image: Joi.string().max(256),
    city: Joi.string().max(256),
    state: Joi.string().max(256),
    phoneNumber: Joi.string().max(10).min(10).required(),
    birthday: Joi.date().required(),
    bio: Joi.string().max(256),
  });
  return schema.validate(data);
};
const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().max(255).min(5).required().email(),
    password: Joi.string()
      .max(40)
      .min(8)
      .required()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
  });
  return schema.validate(data);
};
module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
