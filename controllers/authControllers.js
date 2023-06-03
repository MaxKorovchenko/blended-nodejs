const { signupService } = require('../services/authServices');
const { catchAsync } = require('../utils/catchAsync');

const signup = catchAsync(async (req, res) => {
  const newUser = await signupService(req.body);

  res.status(201).json(newUser);
});

const login = catchAsync(async (req, res) => {});

const logout = catchAsync(async (req, res) => {});

module.exports = {
  signup,
  login,
  logout,
};
