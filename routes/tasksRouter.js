const express = require('express');

const {
  getTask,
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} = require('../controllers/tasksControllers');

const {
  taskSchema,
  updateTaskValidationSchema,
} = require('../utils/validation/taskValidationSchemas');

const { validateBody } = require('../middlewares/validateBody');
const { auth } = require('../middlewares/auth');

const router = express.Router();

router.use(auth);

router.route('/').get(getTasks).post(validateBody(taskSchema), createTask);
router
  .route('/:taskId')
  .get(getTask)
  .patch(validateBody(updateTaskValidationSchema), updateTask)
  .delete(deleteTask);

module.exports = {
  tasksRouter: router,
};
