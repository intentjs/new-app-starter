import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IntentModule } from '@intent/core';

@Module({
  imports: [IntentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
