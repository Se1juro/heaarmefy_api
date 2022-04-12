import { Body, JsonController, Post } from "routing-controllers";
import { UserService } from "../Service/user.service";
import { CreateUserValidator } from "../validators/createUser.validator";

@JsonController("/api/users")
export class UserController {
  constructor(protected readonly userService: UserService) {}

  @Post("/")
  createUser(@Body() data: CreateUserValidator) {
    return this.userService.createUser(data);
  }
}
