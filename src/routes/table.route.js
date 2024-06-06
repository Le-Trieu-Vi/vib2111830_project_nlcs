import { Router } from 'express';
import tableController from '../controllers/table.controller.js';
import * as authMiddleware from '../middlewares/auth.middleware.js';

const tableRouter = Router();

tableRouter.route('/')
    .post(authMiddleware.authenticate, authMiddleware.authorize(['admin']), tableController.create)

export default tableRouter;