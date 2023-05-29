"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const isExist_middleware_1 = require("../../middlewares/isExist.middleware");
const validation_request_middleware_1 = require("../../middlewares/validation-request.middleware");
const todo_validator_1 = require("../../schemas/todo.validator");
const todo_controller_1 = __importDefault(require("../../controllers/todo.controller"));
const tryCatch_middleware_1 = require("../../middlewares/tryCatch.middleware");
const auth_middleware_1 = require("../../middlewares/auth.middleware");
const todosRouter = (0, express_1.Router)();
todosRouter.get('/', auth_middleware_1.authMiddleware, (0, tryCatch_middleware_1.tryCatch)(todo_controller_1.default.getAllTodo.bind(todo_controller_1.default)));
todosRouter.get('/:id', auth_middleware_1.authMiddleware, (0, tryCatch_middleware_1.tryCatch)((0, isExist_middleware_1.isExistMiddleware)('Todo')), (0, tryCatch_middleware_1.tryCatch)(todo_controller_1.default.getTodoById.bind(todo_controller_1.default)));
todosRouter.post('/', auth_middleware_1.authMiddleware, (0, validation_request_middleware_1.validationRequest)(todo_validator_1.addTodoSchema), (0, tryCatch_middleware_1.tryCatch)(todo_controller_1.default.addTodo.bind(todo_controller_1.default)));
todosRouter.put('/:id', auth_middleware_1.authMiddleware, (0, tryCatch_middleware_1.tryCatch)((0, isExist_middleware_1.isExistMiddleware)('Todo')), (0, validation_request_middleware_1.validationRequest)(todo_validator_1.updateTodoSchema), (0, tryCatch_middleware_1.tryCatch)(todo_controller_1.default.updateTodo.bind(todo_controller_1.default)));
todosRouter.delete('/:id', auth_middleware_1.authMiddleware, (0, tryCatch_middleware_1.tryCatch)((0, isExist_middleware_1.isExistMiddleware)('Todo')), (0, tryCatch_middleware_1.tryCatch)(todo_controller_1.default.deleteTodo.bind(todo_controller_1.default)));
exports.default = todosRouter;
//# sourceMappingURL=todos.route.js.map