import Joi from 'joi';

export const addTodoSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().allow(''),
  isPrivate: Joi.boolean()
});

export const updateTodoSchema = Joi.object({
  title: Joi.string(),
  description: Joi.string().allow(''),
  isPrivate: Joi.boolean(),
  isCompleted: Joi.boolean(),
  userId: Joi.number()
});
