const express = require("express");
const { signup, login, logout } = require("../controllers/authControllers");

const { validateBody } = require("../utils/validateBody");
const { createUserValidationSchema, loginUserValidationSchema } = require("../utils/validation/authValidation");

const router = express.Router();

router.post("/signup", validateBody(createUserValidationSchema), signup);

router.post("/login", validateBody(loginUserValidationSchema), login);

router.post("/logout", logout);

module.exports = {
  authRouter: router,
};
