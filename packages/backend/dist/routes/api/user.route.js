"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_validator_1 = require("../../schemas/user.validator");
const validation_request_middleware_1 = require("../../middlewares/validation-request.middleware");
const tryCatch_middleware_1 = require("../../middlewares/tryCatch.middleware");
const user_controller_1 = require("../../controllers/user.controller");
const isExist_middleware_1 = require("../../middlewares/isExist.middleware");
const auth_middleware_1 = require("../../middlewares/auth.middleware");
const router = (0, express_1.Router)();
router.post('/login', (0, validation_request_middleware_1.validationRequest)(user_validator_1.loginSchema), (0, tryCatch_middleware_1.tryCatch)((0, isExist_middleware_1.isExistMiddleware)('User')), (0, tryCatch_middleware_1.tryCatch)(user_controller_1.userController.loginUser));
router.get('/logout', auth_middleware_1.authMiddleware, (0, tryCatch_middleware_1.tryCatch)(user_controller_1.userController.logoutUser));
router.post('/signup', (0, validation_request_middleware_1.validationRequest)(user_validator_1.signupSchema), (0, tryCatch_middleware_1.tryCatch)(user_controller_1.userController.signupUser));
router.get('/current', auth_middleware_1.authMiddleware, (0, tryCatch_middleware_1.tryCatch)(user_controller_1.userController.currentUser));
router.post('/reset-password', (0, validation_request_middleware_1.validationRequest)(user_validator_1.resetPasswordSchema), (0, tryCatch_middleware_1.tryCatch)((0, isExist_middleware_1.isExistMiddleware)('User')), (0, tryCatch_middleware_1.tryCatch)(user_controller_1.userController.resetPassword));
router.post('/change-password', (0, validation_request_middleware_1.validationRequest)(user_validator_1.changePasswordSchema), (0, tryCatch_middleware_1.tryCatch)((0, isExist_middleware_1.isExistMiddleware)('User')), (0, tryCatch_middleware_1.tryCatch)(user_controller_1.userController.changePassword));
exports.default = router;
//# sourceMappingURL=user.route.js.map