import { __ } from '@intentjs/core';
import { Inject, Injectable } from '@nestjs/common';
import { UserDbRepository } from 'app/repositories/userDbRepository';

@Injectable()
export class IntentAppService {
  constructor(
    @Inject('USER_DB_REPO') private readonly users: UserDbRepository,
  ) {}

  getHello(): string {
    return __('hello', { name: 'Intent' });
  }
}
