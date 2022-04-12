import {
  Body,
  Delete,
  Get,
  JsonController,
  Param,
  Post,
  Put,
} from "routing-controllers";
import { UserService } from "../Service/user.service";
import { CreateUserValidator } from "../validators/createUser.validator";

@JsonController("/api/users")
export class UserController {
  constructor(protected readonly userService: UserService) {}

  @Post("/")
  createUser(@Body() data: CreateUserValidator) {
    return this.userService.createUser(data);
  }

  @Get("/")
  getUsers() {
    return this.userService.getUsers();
  }

  @Put("/:id")
  updateUser(@Body() data: CreateUserValidator, @Param("id") idUser: number) {
    return this.userService.createUser({ ...data, id: idUser });
  }

  @Put("/inactive/:id")
  inactiveUser(@Param("id") idUser: number) {
    return this.userService.inactiveUser(idUser);
  }

  @Delete("/:id")
  deleteUser(@Param("id") idUser: number) {
    return this.userService.deleteUser(idUser);
  }

  @Get("/:id")
  getUserById(@Param("id") id: number) {
    return this.userService.getUserById(id);
  }
}
