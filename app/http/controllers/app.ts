import { Controller, Get } from '@nestjs/common';
import { IntentAppService } from 'app/services';

@Controller()
export class IntentAppController {
  constructor(private readonly appService: IntentAppService) {}

  @Get()
  async getHello() {
    return this.appService.getHello();
  }
}
