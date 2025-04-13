import { Type } from "@intentjs/core";
import { Server } from "@intentjs/hyper-express";
import { UserController } from "#http/controllers/app";
import { AuthController } from "#http/controllers/auth";
import {
  CorsMiddleware,
  HttpGuard,
  HttpMiddleware,
  Kernel,
  MiddlewareConfigurator,
} from "@intentjs/core/http";

export class HttpKernel extends Kernel {
  /**
   * Global registry for all of the controller classes.
   * Read more - https://tryintent.com/docs/controllers
   */
  public controllers(): Type<any>[] {
    return [UserController, AuthController];
  }

  /**
   * Register all of your global middlewares here.
   * Middlewares added in the return array will be
   * applied to all routes by default.
   *
   * Read more - https://tryintent.com/docs/middlewares
   */
  public middlewares(): Type<HttpMiddleware>[] {
    return [CorsMiddleware];
  }

  /**
   * Register all of your route based middlewares here.
   * You can apply middlewares to group of routes, controller classes
   * or exclude them.
   *
   * Read more - https://tryintent.com/docs/middlewares
   */
  public routeMiddlewares(configurator: MiddlewareConfigurator) {
    return;
  }

  /**
   * Register all of your global guards here.
   * Guards added in the return array will be
   * applied to all routes by default.
   *
   * Read more - https://tryintent.com/docs/guards
   */
  public guards(): Type<HttpGuard>[] {
    return [];
  }

  /**
   * @param app
   */
  public async boot(app: Server): Promise<void> {}
}
