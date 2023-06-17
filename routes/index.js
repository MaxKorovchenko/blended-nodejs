const express = require('express');
const { authRouter } = require('./authRouter');
const { tasksRouter } = require('./tasksRouter');

const router = express.Router();

router.use('/tasks', tasksRouter);
router.use('/auth', authRouter);

module.exports = {
  rootRouter: router,
};
