import { RestServer } from '@intentjs/core';
import { AppModule } from './module';
import { AbstractHttpAdapter } from '@nestjs/core';
import { ApplicationExceptionFilter } from './errors/filter';

RestServer.make(AppModule, {
  exceptionFilter: (httpAdapter: AbstractHttpAdapter) =>
    new ApplicationExceptionFilter(httpAdapter),
});
