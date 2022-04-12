import { AppDataSource } from "../config/db";
import { Users } from "../models/users.model";

export const UserRepository = AppDataSource.getRepository(Users).extend({
  async findUsers(page?: number, limit?: number): Promise<Users[]> {
    return await this.find({ where: { active: true } });
  },

  async findUserById(id: number) {
    return await this.findOne({ where: { id } });
  },
});
