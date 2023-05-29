"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationRequest = void 0;
const validationRequest = (schema) => (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({
            message: error.details[0].message
        });
    }
    next();
};
exports.validationRequest = validationRequest;
//# sourceMappingURL=validation-request.middleware.js.map