import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IntentModule } from '@intent/core';
import config from 'config';

@Module({
  imports: [IntentModule.register(config)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
