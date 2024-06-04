import ApiError from "../api-error.js";
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
}

export default new UserController();