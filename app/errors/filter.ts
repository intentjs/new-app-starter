import { IntentExceptionFilter } from '@intentjs/core';
import { Catch, HttpException, Type } from '@nestjs/common';

@Catch()
export class ApplicationExceptionFilter extends IntentExceptionFilter {
  doNotReport(): Array<Type<HttpException>> {
    return [];
  }

  report(): Array<Type<HttpException>> | string {
    return '*';
  }
}
