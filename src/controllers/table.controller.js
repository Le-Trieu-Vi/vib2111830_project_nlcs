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

    async getAll(req, res, next) {
        let tables;
        try {
            tables = await this.tableService.getAll();
        } catch (error) {
            return new ApiError(error.status, error.message);
        }
        res.status(200).json(tables);
    }

    async getOne(req, res, next) {
        let table;
        try {
            table = await this.tableService.getOne(req.params.id);
        } catch (error) {
            return new ApiError(error.status, error.message);
        }
        res.status(200).json(table);
    }

    async update(req, res, next) {
        let table;
        try {
            table = await this.tableService.update(req.params.id, req.body);
        } catch (error) {
            return new ApiError(error.status, error.message);
        }
        res.status(200).json(table);
    }

    async delete(req, res, next) {
        let table;
        try {
            table = await this.tableService.delete(req.params.id);
        } catch (error) {
            return new ApiError(error.status, error.message);
        }
        res.status(204).end();
    }
}

export default new TableController();