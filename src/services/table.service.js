import PrismaService from '../core/database.js';
import ApiError from '../api-error.js';

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
      throw new ApiError(error.status, error.message);
    }
  }

  async getAll() {
    try {
      return this.prismaService.table.findMany();
    } catch (error) {
      throw new ApiError(error.status, error.message);
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
      throw new ApiError(error.status, error.message);
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
      throw new ApiError(error.status, error.message);
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
      throw new ApiError(error.status, error.message);
    }
  }
}
