const { User } = require('../models/User');
const { HttpError } = require('../utils/HttpError');
const bcrypt = require('bcryptjs');
const { assignTokens } = require('../utils/assignTokens');

const signupService = async ({ email, password }) => {
  const user = await User.findOne({ email });

  if (user) {
    throw new HttpError(409, 'Email must be unique');
  }

  // const hashPassword = await bcrypt.hash(password, 12);

  return await User.create({ email, password });
};

const loginService = async ({ email, password }) => {
  const fetchedUser = await User.findOne({ email });

  if (!fetchedUser) {
    throw new HttpError(401, 'Email or password invalid');
  }

  // const isPasswordCorrect = await bcrypt.compare(password, user.password);

  const isPasswordCorrect = await fetchedUser.isPasswordCorrect(password);

  if (!isPasswordCorrect) {
    throw new HttpError(401, 'Email or password invalid');
  }

  const { accessToken, refreshToken } = assignTokens(fetchedUser);

  await User.findByIdAndUpdate(fetchedUser._id, {
    refresh_token: refreshToken,
  });

  return { user: fetchedUser, accessToken };
};

const logoutService = async ({ _id }) => {
  await User.findByIdAndUpdate(_id, { refresh_token: null });
};

module.exports = {
  signupService,
  loginService,
  logoutService,
};
