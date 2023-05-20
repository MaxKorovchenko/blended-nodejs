const Joi = require('joi');

const taskSchema = Joi.object({
  title: Joi.string().min(3).max(30).required(),
  completed: Joi.boolean(),
});

const updateTaskValidationSchema = Joi.object()
  .keys({
    title: taskSchema.extract('title').optional(),
    completed: taskSchema.extract('completed').optional(),
  })
  .or('title', 'completed');

module.exports = {
  taskSchema,
  updateTaskValidationSchema,
};
