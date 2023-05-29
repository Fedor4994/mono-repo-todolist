"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoController = void 0;
const todo_service_1 = __importDefault(require("../services/todo.service"));
class TodoController {
    constructor(todoService) {
        this.todoService = todoService;
    }
    async getAllTodo(req, res) {
        const { user } = req;
        const { query } = req;
        const data = await this.todoService.findAll((user === null || user === void 0 ? void 0 : user.id) || 0, query);
        res.send(data);
    }
    async getTodoById(req, res) {
        const { id } = req.params;
        const todo = await this.todoService.findOne(id);
        res.send(todo);
    }
    async addTodo(req, res) {
        const { title, description } = req.body;
        const { user } = req;
        const todo = await this.todoService.addOne({ title, description }, (user === null || user === void 0 ? void 0 : user.id) || 0);
        res.send(todo);
    }
    async deleteTodo(req, res) {
        const { id } = req.params;
        await this.todoService.deleteOne(id);
        res.json({ message: 'Todo successfuly deleted' });
    }
    async updateTodo(req, res) {
        const { id } = req.params;
        const { title, description, isCompleted, isPrivate } = req.body;
        const newData = { title, description, isCompleted, isPrivate };
        await this.todoService.updateOne(id, newData);
        res.json({ message: 'Todo successfuly updated' });
    }
}
exports.TodoController = TodoController;
const todoController = new TodoController(new todo_service_1.default());
exports.default = todoController;
//# sourceMappingURL=todo.controller.js.map