import { AppDataSource } from "../config/db";
import { Users } from "../models/users.model";

export const UserRepository = AppDataSource.getRepository(Users).extend({
  async findUsers(page?: number, limit?: number): Promise<string> {
    return await "Hello world";
  },
});
