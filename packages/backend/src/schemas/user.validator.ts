import Joi from 'joi';

export const loginSchema = Joi.object({
  email: Joi.string().email({ minDomainSegments: 2 }).required(),
  password: Joi.string().min(6).max(30).required()
});

export const signupSchema = Joi.object({
  email: Joi.string().email({ minDomainSegments: 2 }).required(),
  password: Joi.string().min(6).max(30).required()
});

export const resetPasswordSchema = Joi.object({
  email: Joi.string().email({ minDomainSegments: 2 }).required()
});

export const changePasswordSchema = Joi.object({
  email: Joi.string().email({ minDomainSegments: 2 }).required(),
  currentPassword: Joi.string().min(6).max(30).required(),
  updatePassword: Joi.string().min(6).max(30).required()
});
