"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTodoSchema = exports.addTodoSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.addTodoSchema = joi_1.default.object({
    title: joi_1.default.string().required(),
    description: joi_1.default.string().allow(''),
    isPrivate: joi_1.default.boolean()
});
exports.updateTodoSchema = joi_1.default.object({
    title: joi_1.default.string(),
    description: joi_1.default.string().allow(''),
    isPrivate: joi_1.default.boolean(),
    isCompleted: joi_1.default.boolean(),
    userId: joi_1.default.number()
});
//# sourceMappingURL=todo.validator.js.map