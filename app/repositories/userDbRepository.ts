import { DatabaseRepository, InjectModel } from '@intentjs/core';
import { Injectable } from '@nestjs/common';
import { UserModel } from '../models/userModel';

@Injectable()
export class UserDbRepository extends DatabaseRepository<UserModel> {
  @InjectModel(UserModel)
  model: UserModel;
}
