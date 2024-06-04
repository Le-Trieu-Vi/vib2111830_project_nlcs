import { Router } from 'express';
import authController from '../controllers/auth.controller.js';
import * as authMiddelware from '../middlewares/auth.middleware.js';

const authRouter = Router();

authRouter.route('/login')
    .post(authMiddelware.login, authController.login);

export default authRouter;
