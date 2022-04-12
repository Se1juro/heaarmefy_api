import { Service } from "typedi";
import { DeepPartial } from "typeorm";
import { Users } from "../models/users.model";
import { UserRepository } from "../Repositories/user.repository";

@Service()
export class UserService {
  constructor() {}

  async createUser(payload: DeepPartial<Users>) {
    const newUser = UserRepository.create(payload);
    return await UserRepository.save(newUser);
  }
}
