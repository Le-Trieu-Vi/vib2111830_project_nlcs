import { Router } from 'express';
import userController from '../controllers/user.controller.js'
import * as userMiddleware from '../middlewares/user.middleware.js';
import * as authMiddleware from '../middlewares/auth.middleware.js';

const userRouter = Router();
userRouter.use(authMiddleware.authenticate);
userRouter.route('/')
       .post(authMiddleware.authorize(['admin']) ,userMiddleware.create, userController.create)
       .get(userController.getAll)

export default userRouter;


