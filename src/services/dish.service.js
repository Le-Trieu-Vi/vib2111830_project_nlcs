import PrismaService from '../core/database.js';
import { ApiError } from '../middlewares/error.middleware.js';

export default class DishService {
  constructor() {
    this.prismaService = new PrismaService();
  }

  async create(data) {
    try {
      return this.prismaService.dish.create({
        data,
      });
    } catch (error) {
      next(new ApiError(500, 'Failed to create dish'));
    }
  }

  async getAll() {
    try {
      return this.prismaService.dish.findMany();
    } catch (error) {
      next(new ApiError(500, 'Failed to get dishes'));
    }
  }

  async getOne(id) {
    try {
      return this.prismaService.dish.findUnique({
        where: {
          id,
        },
      });
    } catch (error) {
      next(new ApiError(500, 'Failed to get dish'));
    }
  }

  async update(id, data) {
    try {
      return this.prismaService.dish.update({
        where: {
          id,
        },
        data,
      });
    } catch (error) {
      next(new ApiError(500, 'Failed to update dish'));
    }
  }

  async delete(id) {
    try {
      return this.prismaService.dish.delete({
        where: {
          id,
        },
      });
    } catch (error) {
      next(new ApiError(500, 'Failed to delete dish'));
    }
  }
}
