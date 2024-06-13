import { Router } from "express";
import dishController from "../controllers/dish.controller.js";
import * as authMiddleware from "../middlewares/auth.middleware.js";
import * as dishMiddleware from "../middlewares/dish.middleware.js";

const dishRouter = Router();
dishRouter.use(authMiddleware.authenticate);
dishRouter.route("/")
  .get(authMiddleware.authorize(["admin", "staff"]), dishController.getAll)
  .post(authMiddleware.authorize(["admin"]), dishMiddleware.create, dishController.create);

dishRouter.route("/:id")
    .get(authMiddleware.authorize(["admin", "staff"]), dishController.getOne)
    .put(authMiddleware.authorize(["admin"]), dishMiddleware.update, dishController.update)
    .delete(authMiddleware.authorize(["admin"]), dishController.delete);

export default dishRouter;
