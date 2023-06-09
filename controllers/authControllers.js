const {
  signupService,
  loginService,
  logoutService,
} = require('../services/authServices');
const { catchAsync } = require('../utils/catchAsync');

const signup = catchAsync(async (req, res) => {
  const newUser = await signupService(req.body);

  res.status(201).json(newUser);
});

const login = catchAsync(async (req, res) => {
  const { user, accessToken } = await loginService(req.body);

  res.json({
    user,
    accessToken,
  });
});

const logout = catchAsync(async (req, res) => {
  await logoutService(req.user);

  res.json({
    message: 'Logout successful',
  });
});

module.exports = {
  signup,
  login,
  logout,
};
