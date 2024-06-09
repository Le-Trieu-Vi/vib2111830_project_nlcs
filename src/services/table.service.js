import PrismaService from '../core/database.js';
import { ApiError } from '../middlewares/error.middleware.js';

export default class TableService {
  constructor() {
    this.prismaService = new PrismaService();
  }

  async create(data) {
    try {
      return this.prismaService.table.create({
        data,
      });
    } catch (error) {
      next(new ApiError(500, 'Failed to create table'));
    }
  }

  async getAll() {
    try {
      return this.prismaService.table.findMany();
    } catch (error) {
      next(new ApiError(500, 'Failed to get tables'));
    }
  }

  async getOne(id) {
    try {
      return this.prismaService.table.findUnique({
        where: {
          id,
        },
      });
    } catch (error) {
      next(new ApiError(500, 'Failed to get table'));
    }
  }

  async update(id, data) {
    console.log(id, data);
    try {
      return this.prismaService.table.update({
        where: {
          id,
        },
        data,
      });
    } catch (error) {
      next(new ApiError(500, 'Failed to update table'));
    }
  }

  async delete(id) {
    try {
      return this.prismaService.table.delete({
        where: {
          id,
        },
      });
    } catch (error) {
      next(new ApiError(500, 'Failed to delete table'));
    }
  }
}
