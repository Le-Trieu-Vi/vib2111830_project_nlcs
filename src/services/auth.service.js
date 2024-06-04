import PrismaService from '../core/database.js';
import ApiError from '../api-error.js';
import * as bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export default class AuthService {
  constructor() {
    this.prismaService = new PrismaService();
  }

  async login (data) {
    const user = await this.prismaService.user.findUnique({
      where: {
        username: data.username,
      },
    });
    if (!user || await bcrypt.compare(data.password, user.password) === false) {
      throw new ApiError(401, 'Username or password is incorrect');
    }
    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });
    return token;
  };
}
