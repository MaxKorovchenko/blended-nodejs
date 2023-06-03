const {
  getTasksService,
  getTaskService,
  createTaskService,
  updateTaskService,
  deleteTaskService,
} = require('../services/tasksServices');
const { catchAsync } = require('../utils/catchAsync');

const getTasks = async (req, res) => {
  const { page = 1, limit = 10, completed } = req.query;
  const tasks = await getTasksService(page, limit, completed);

  res.status(200).json(tasks);
};

const getTask = async (req, res) => {
  const { taskId } = req.params;
  const task = await getTaskService(taskId);

  res.status(200).json(task);
};

const createTask = async (req, res, next) => {
  const newTask = await createTaskService(req.body);

  res.status(201).json(newTask);
};

const updateTask = async (req, res, next) => {
  const { taskId } = req.params;
  const task = await updateTaskService(taskId, req.body);

  res.status(200).json(task);
};

const deleteTask = async (req, res, next) => {
  const { taskId } = req.params;
  await deleteTaskService(taskId);

  res.status(200).json(taskId);
};

module.exports = {
  getTask: catchAsync(getTask),
  getTasks: catchAsync(getTasks),
  createTask: catchAsync(createTask),
  updateTask: catchAsync(updateTask),
  deleteTask: catchAsync(deleteTask),
};
