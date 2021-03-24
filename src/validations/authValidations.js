const Joi = require("joi");

const registerValidation = (data) => {
  const schema = Joi.object({
    fullname: Joi.string().max(128).min(6).required(),
    email: Joi.string().max(64).min(5).required().email(),
    password: Joi.string()
      .max(64)
      .min(8)
      .required()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
    gender: Joi.string().max(10).min(4).required().default("male"),
    profile_image: Joi.string().max(64),
    city: Joi.string().max(64),
    state: Joi.string().max(64),
    phoneNumber: Joi.string().max(10).min(10).required(),
    job: Joi.string().max(64).min(3).required(),
    birthdate: Joi.date().required(),
    bio: Joi.string().max(256),
    repeat_password: Joi.ref("password"),
  }).with("password", "repeat_password");
  return schema.validate(data);
};
const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().max(64).min(5).required().email(),
    password: Joi.string()
      .max(64)
      .min(8)
      .required()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
  });
  return schema.validate(data);
};
module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
