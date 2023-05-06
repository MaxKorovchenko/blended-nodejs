const express = require("express");

const { getTask, getTasks, createTask, updateTask, deleteTask } = require("../controllers/tasksControllers");

const router = express.Router();
router.route("/").get(getTasks).post(createTask);
router.route("/:taskId").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = {
  tasksRouter: router,
};
