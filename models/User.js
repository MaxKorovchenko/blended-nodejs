const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const schema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  refresh_token: {
    type: String,
  },
  tasks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'task',
    },
  ],
});

schema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

schema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  //console.log(this);

  this.password = await bcrypt.hash(this.password, 12);
});

const User = mongoose.model('user', schema);

module.exports = {
  User,
};
