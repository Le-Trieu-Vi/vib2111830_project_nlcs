import autoBind from "../utils/auto-bind.util.js";
import { ApiError } from "../middlewares/error.middleware.js";
import AuthService from "../services/auth.service.js";

class AuthController {
    constructor() {
        this.authService = new AuthService();
        autoBind(this);
    }

    async login(req, res, next) {
        let accessToken;
        try {
            accessToken = await this.authService.login(req.body);
        } catch (error) {
            return next(new ApiError(error.status, error.message));
        }
        res.status(200).json({
            status: "success",
            message: "Login successfully",
            data: {
                accessToken
            }
        });
    }
}

export default new AuthController();