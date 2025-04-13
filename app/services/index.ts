import { Inject, Injectable } from "@intentjs/core";
import { UserDbRepository } from "#repositories/user-repository";
import { __ } from "@intentjs/core/locale";
@Injectable()
export class UserService {
  constructor(
    @Inject("USER_DB_REPO") private readonly users: UserDbRepository
  ) {}

  getHello(): string {
    return __("hello", { name: "Intent" });
  }
}
