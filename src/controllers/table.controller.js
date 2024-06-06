import ApiError from "../api-error.js";
import TableService from "../services/table.service.js";
import autoBind from "../utils/auto-bind.util.js";

class TableController {
    constructor () {
        this.tableService = new TableService();
        autoBind(this);
    }

    async create(req, res, next) {
        let table;
        try {
            table = await this.tableService.create(req.body);
        } catch (error) {
            return new ApiError(error.status, error.message);
        }
        res.status(200).json(table);
    }
}

export default new TableController();