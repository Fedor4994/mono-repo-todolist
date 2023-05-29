import { Router } from 'express';

import { isExistMiddleware } from '../../middlewares/isExist.middleware';
import { validationRequest } from '../../middlewares/validation-request.middleware';
import { addTodoSchema, updateTodoSchema } from '../../schemas/todo.validator';
import todoController from '../../controllers/todo.controller';
import { tryCatch } from '../../middlewares/tryCatch.middleware';
import { authMiddleware } from '../../middlewares/auth.middleware';

const todosRouter: Router = Router();

todosRouter.get('/', authMiddleware, tryCatch(todoController.getAllTodo.bind(todoController)));
todosRouter.get(
  '/:id',
  authMiddleware,
  tryCatch(isExistMiddleware('Todo')),
  tryCatch(todoController.getTodoById.bind(todoController))
);
todosRouter.post(
  '/',
  authMiddleware,
  validationRequest(addTodoSchema),
  tryCatch(todoController.addTodo.bind(todoController))
);
todosRouter.put(
  '/:id',
  authMiddleware,
  tryCatch(isExistMiddleware('Todo')),
  validationRequest(updateTodoSchema),
  tryCatch(todoController.updateTodo.bind(todoController))
);
todosRouter.delete(
  '/:id',
  authMiddleware,
  tryCatch(isExistMiddleware('Todo')),
  tryCatch(todoController.deleteTodo.bind(todoController))
);

export default todosRouter;
