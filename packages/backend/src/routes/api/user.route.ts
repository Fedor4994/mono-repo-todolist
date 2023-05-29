import { Router } from 'express';
import {
  loginSchema,
  signupSchema,
  resetPasswordSchema,
  changePasswordSchema
} from '../../schemas/user.validator';
import { validationRequest } from '../../middlewares/validation-request.middleware';
import { tryCatch } from '../../middlewares/tryCatch.middleware';
import { userController } from '../../controllers/user.controller';
import { isExistMiddleware } from '../../middlewares/isExist.middleware';
import { authMiddleware } from '../../middlewares/auth.middleware';

const router: Router = Router();

router.post(
  '/login',
  validationRequest(loginSchema),
  tryCatch(isExistMiddleware('User')),
  tryCatch(userController.loginUser)
);
router.get('/logout', authMiddleware, tryCatch(userController.logoutUser));
router.post('/signup', validationRequest(signupSchema), tryCatch(userController.signupUser));
router.get('/current', authMiddleware, tryCatch(userController.currentUser));

router.post(
  '/reset-password',
  validationRequest(resetPasswordSchema),
  tryCatch(isExistMiddleware('User')),
  tryCatch(userController.resetPassword)
);
router.post(
  '/change-password',
  validationRequest(changePasswordSchema),
  tryCatch(isExistMiddleware('User')),
  tryCatch(userController.changePassword)
);

export default router;
