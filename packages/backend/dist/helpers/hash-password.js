"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashPassword = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const hashPassword = async (password) => {
    const { SALT } = process.env;
    const salt = await bcryptjs_1.default.genSalt(Number(SALT));
    const hashedPassword = await bcryptjs_1.default.hash(password, salt);
    return hashedPassword;
};
exports.hashPassword = hashPassword;
//# sourceMappingURL=hash-password.js.map