"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestError = void 0;
const RequestError = (status, message) => {
    const error = new Error(message);
    error.status = status;
    return error;
};
exports.RequestError = RequestError;
//# sourceMappingURL=RequestError.js.map