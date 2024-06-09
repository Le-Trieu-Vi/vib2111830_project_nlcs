import { ApiError } from "../middlewares/error.middleware.js";
import UserService from "../services/user.service.js";
import autoBind from "../utils/auto-bind.util.js";

class UserController {
    constructor () {
        this.userService = new UserService();
        autoBind(this);
    }

    async create(req, res, next) {
        let user;
        try {
            user = await this.userService.create(req.body);
        } catch (error) {
            return next(error);
        }
        res.status(201).json(user);
    }

    async getAll(req, res, next) {
        let users;
        try {
            users = await this.userService.getAll();
        } catch (error) {
            return next(new ApiError(error.status, error.message));
        }
        res.status(200).json(users);
    }

    async getOne(req, res, next) {
        let user;
        try {
            user = await this.userService.getOne(req.params.id);
        } catch (error) {
            return next(new ApiError(error.status, error.message));
        }
        res.status(200).json(user);
    }

    async delete(req, res, next) {
        try {
            await this.userService.delete(req.params.id);
        } catch (error) {
            return next(new ApiError(error.status, error.message));
        }
        res.status(204).end();
    }

    async update(req, res, next) {
        let user;
       try {
        user = await this.userService.update(req.params.id, req.body); 
       } catch (error) {
        return next(new ApiError(error.status, error.message));
       }
         res.status(200).json(user);
    }
}

export default new UserController();