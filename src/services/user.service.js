import PrismaService from '../core/database.js';
import * as bcrypt from 'bcrypt';

export default class UserService {
  constructor() {
    this.prismaService = new PrismaService();
  }

  getAll() {
    return this.prismaService.user.findMany();
  }

  create(data) {
    try {
      const salt = bcrypt.genSaltSync(10);
      data.password = bcrypt.hashSync(data.password, salt);
      return this.prismaService.user.create({
        data,
      });
    } catch (error) {
      throw error;
    }
  }
}
