import { Controller, Get } from '@nestjs/common';
import { IntentAppService } from '../services';

@Controller()
export class IntentAppController {
  constructor(private readonly appService: IntentAppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
