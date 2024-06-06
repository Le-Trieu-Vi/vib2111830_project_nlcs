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
}
