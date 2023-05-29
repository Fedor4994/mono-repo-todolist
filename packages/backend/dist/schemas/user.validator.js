"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.changePasswordSchema = exports.resetPasswordSchema = exports.signupSchema = exports.loginSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.loginSchema = joi_1.default.object({
    email: joi_1.default.string().email({ minDomainSegments: 2 }).required(),
    password: joi_1.default.string().min(6).max(30).required()
});
exports.signupSchema = joi_1.default.object({
    email: joi_1.default.string().email({ minDomainSegments: 2 }).required(),
    password: joi_1.default.string().min(6).max(30).required()
});
exports.resetPasswordSchema = joi_1.default.object({
    email: joi_1.default.string().email({ minDomainSegments: 2 }).required()
});
exports.changePasswordSchema = joi_1.default.object({
    email: joi_1.default.string().email({ minDomainSegments: 2 }).required(),
    currentPassword: joi_1.default.string().min(6).max(30).required(),
    updatePassword: joi_1.default.string().min(6).max(30).required()
});
//# sourceMappingURL=user.validator.js.map