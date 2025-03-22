import {
  Controller,
  Get,
  Req,
  Request,
  Res,
  Response as IResponse,
} from '@intentjs/core';
import { UserService } from '#services/index';

@Controller()
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get()
  async getHello(@Req() req: Request, @Res() res: IResponse) {
    return res.json({ hello: 'world' });
  }
}
