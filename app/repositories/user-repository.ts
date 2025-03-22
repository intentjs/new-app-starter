import { DatabaseRepository, Injectable, InjectModel } from '@intentjs/core';
import { UserModel } from '#models/user';

@Injectable()
export class UserDbRepository extends DatabaseRepository<UserModel> {
  @InjectModel(UserModel)
  declare model: UserModel;
}
