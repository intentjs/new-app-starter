import { UserService } from "#services/index";
import {
  Controller,
  Get,
  Req,
  Request,
  Res,
  Response,
} from "@intentjs/core/http";

@Controller()
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get()
  async getHello(@Req() req: Request, @Res() res: Response) {
    return res.json({ hello: "world" });
  }
}
