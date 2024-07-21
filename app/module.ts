import config from 'config';
import { Module } from '@nestjs/common';
import { IntentModule } from '@intentjs/core';
import { IntentAppService } from './services';
import { IntentAppController } from './http/controllers/app';
import { GreetingCommand } from './console/greeting';
import { UserDbRepository } from './repositories/userDbRepository';

@Module({
  imports: [IntentModule.register(config)],
  controllers: [IntentAppController],
  providers: [
    IntentAppService,
    GreetingCommand,
    { provide: 'USER_DB_REPO', useClass: UserDbRepository },
  ],
})
export class AppModule {}
