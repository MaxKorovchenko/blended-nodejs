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

const { validateBody } = require('../utils/validateBody');

const router = express.Router();

router.route('/').get(getTasks).post(validateBody(taskSchema), createTask);
router
  .route('/:taskId')
  .get(getTask)
  .patch(validateBody(updateTaskValidationSchema), updateTask)
  .delete(deleteTask);

module.exports = {
  tasksRouter: router,
};
