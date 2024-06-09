import PrismaService from '../core/database.js';
import * as bcrypt from 'bcrypt';

export default class UserService{
  constructor() {
    this.prismaService = new PrismaService();
  }

  async getAll() {
    try {
      return this.prismaService.user.findMany();
    } catch (error) {
      next(new ApiError(500, 'Failed to get users'));
    }
  }

  async create(data) {
    try {
      const salt = bcrypt.genSaltSync(10);
      data.password = bcrypt.hashSync(data.password, salt);
      return this.prismaService.user.create({
        data,
      });
    } catch (error) {
      next(new ApiError(500, 'Failed to create user'));
    }
  }

  async getOne(id) {
    try {
      return this.prismaService.user.findUnique({
        where: {
          id,
        },
      });
    } catch (error) {
      next(new ApiError(500, 'Failed to get user'));
    }
  }

  async delete(id) {
    try {
      return this.prismaService.user.delete({
        where: {
          id,
        },
      });
    } catch (error) {
      next(new ApiError(500, 'Failed to delete user'));
    }
  }

  async update (id, data) {
    try {
      return this.prismaService.user.update({
        where: {
          id,
        },
        data,
      });
    } catch (error) {
      next(new ApiError(500, 'Failed to update user'));
    }
  }
}
