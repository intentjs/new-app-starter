import { IntentExceptionFilter, Request, Response } from '@intentjs/core';
import { Catch, HttpException, HttpStatus, Type } from '@nestjs/common';

@Catch()
export class ApplicationExceptionFilter extends IntentExceptionFilter {
  doNotReport(): Array<Type<HttpException>> {
    return [];
  }

  report(): Array<Type<HttpException>> | string {
    return '*';
  }

  handleHttp(exception: any, req: Request, res: Response) {
    return res.status(this.getStatus(exception)).send(exception);
  }

  getStatus(exception: any): HttpStatus {
    return exception instanceof HttpException
      ? exception.getStatus()
      : HttpStatus.INTERNAL_SERVER_ERROR;
  }
}
