import { Module } from '@nestjs/common';
import { IntentAppController } from './controllers';
import { IntentAppService } from './services';
import { IntentModule } from '@intentjs/core';
import config from 'config';

@Module({
  imports: [IntentModule.register(config)],
  controllers: [IntentAppController],
  providers: [IntentAppService],
})
export class AppModule {}
