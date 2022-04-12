import { NotFoundError } from "routing-controllers";
import { Service } from "typedi";
import { DeepPartial, DeleteResult } from "typeorm";
import { Users } from "../models/users.model";
import { UserRepository } from "../Repositories/user.repository";

@Service()
export class UserService {
  constructor() {}

  async createUser(payload: DeepPartial<Users>): Promise<Users> {
    const { id } = payload;
    let userExists: Users | null = null;
    if (id) userExists = await UserRepository.findUserById(id);

    if (!userExists && id) throw new NotFoundError("");

    const newUser = UserRepository.create(payload);
    return await UserRepository.save(newUser);
  }

  async getUsers(): Promise<Users[]> {
    return await UserRepository.findUsers();
  }

  async inactiveUser(id: number): Promise<Users> {
    const user = await UserRepository.findUserById(id);
    if (!user) throw new NotFoundError("");

    const updateUser = UserRepository.create({ ...user, active: false });

    return UserRepository.save(updateUser);
  }

  async deleteUser(id: number): Promise<DeleteResult> {
    const user = await UserRepository.findUserById(id);
    if (!user) throw new NotFoundError("");

    const userDeleted = UserRepository.delete({ id });

    return userDeleted;
  }

  async getUserById(id: number) {
    const user = await UserRepository.findUserById(id);

    if (!user) throw new NotFoundError("");

    return user;
  }
}
