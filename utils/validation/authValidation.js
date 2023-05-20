const Joi = require("joi");

const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const createUserValidationSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required().pattern(passwordPattern).messages({
    "string.pattern.base": "password should contains 8 letters",
  }),
});

const loginUserValidationSchema = Joi.object().keys({
  email: createUserValidationSchema.extract("email"),
  password: createUserValidationSchema.extract("password"),
});

module.exports = {
  loginUserValidationSchema,
  createUserValidationSchema,
};
