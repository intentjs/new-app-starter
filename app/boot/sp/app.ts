import {
  IntentApplicationContext,
  ModuleRef,
  ServiceProvider,
} from "@intentjs/core";
import { UserDbRepository } from "#repositories/user-repository";
import { UserService } from "#services/index";
import { AuthService } from "#services/auth";
import { Schedule } from "@intentjs/core/schedule";

export class AppServiceProvider extends ServiceProvider {
  /**
   * Register any application services here.
   */
  register() {
    /**
     * Binding the UserService with the application.
     *
     * Read more - https://tryintent.com/docs/providers
     */
    this.bind(UserService);

    this.bind(AuthService);
    /**
     * Binding the UserDbRepository with a non-class based token 'USER_DB_REPO'.
     *
     * Read more - https://tryintent.com/docs/providers#class-based-providers
     */
    this.bindWithClass("USER_DB_REPO", UserDbRepository);
  }

  /**
   * Bootstrap any application service here.
   */
  boot(app: IntentApplicationContext) {
    Schedule.call(() => {
      console.log("Hello, world!");
    })
      .everyTwoSeconds()
      .run();
  }

  /**
   * Shutdown the application.
   *
   * @param app - The application context.
   */
  shutdown(app: IntentApplicationContext) {}

  /**
   * Define the schedules for the application.
   *
   * @param ref - The module reference.
   */
  async schedules(ref: ModuleRef): Promise<void> {
    Schedule.call(() => {
      console.log("Hello, world from app service provider!");
    })
      .everyTwoSeconds()
      .run();
  }
}
