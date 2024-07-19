import { Injectable } from '@nestjs/common';

@Injectable()
export class IntentAppService {
  getHello(): string {
    return 'Hello World!';
  }
}
