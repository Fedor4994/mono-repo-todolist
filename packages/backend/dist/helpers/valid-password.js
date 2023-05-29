"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidPassword = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const isValidPassword = async (newPassword, password) => {
    const isValid = await bcryptjs_1.default.compare(newPassword, password);
    return isValid;
};
exports.isValidPassword = isValidPassword;
//# sourceMappingURL=valid-password.js.map