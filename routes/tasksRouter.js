const express = require("express");

const { getTask, getTasks, createTask, updateTask, deleteTask } = require("../controllers/tasksControllers");
const { taskSchema } = require("../utils/validation/taskValidationSchemas");
const { validateBody } = require("../utils/validateBody");

const router = express.Router();

router.route("/").get(getTasks).post(createTask);
router.route("/:taskId").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = {
  tasksRouter: router,
};
