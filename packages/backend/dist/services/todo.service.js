"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const todos_type_1 = require("../types/todos.type");
const Todo_entity_1 = require("../entities/Todo.entity");
class TodoService {
    async findAll(userId, query) {
        const { search, status, categorie, limit = 7, page = 1 } = query;
        const isTrueStatus = status === 'true';
        const skipCount = (page - 1) * limit;
        const [todos, total] = await Todo_entity_1.Todo.findAndCount({
            where: categorie === todos_type_1.Categorie.All
                ? isTrueStatus
                    ? {
                        userId,
                        title: (0, typeorm_1.Like)(`%${search}%`),
                        isCompleted: isTrueStatus
                    }
                    : {
                        userId,
                        title: (0, typeorm_1.Like)(`%${search}%`)
                    }
                : {
                    userId,
                    title: (0, typeorm_1.Like)(`%${search}%`),
                    isPrivate: categorie === todos_type_1.Categorie.Private
                },
            order: {
                id: 'ASC'
            },
            take: limit,
            skip: skipCount
        });
        return { todos, total };
    }
    async findOne(id) {
        const todo = await Todo_entity_1.Todo.findOneBy({ id });
        return todo;
    }
    async addOne({ title, description = '' }, userId) {
        const createdTodo = Todo_entity_1.Todo.create({
            title,
            description,
            userId
        });
        await createdTodo.save();
        return createdTodo;
    }
    async deleteOne(id) {
        await Todo_entity_1.Todo.delete({ id });
    }
    async updateOne(id, newData) {
        await Todo_entity_1.Todo.update(id, newData);
    }
}
exports.default = TodoService;
//# sourceMappingURL=todo.service.js.map