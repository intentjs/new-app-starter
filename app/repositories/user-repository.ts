import { Injectable } from "@intentjs/core";
import { UserModel } from "#models/user";
import { DatabaseRepository } from "@intentjs/core/db";

@Injectable()
export class UserDbRepository extends DatabaseRepository<UserModel> {
  model = UserModel;
}
