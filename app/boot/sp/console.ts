import {
  IntentApplicationContext,
  ModuleRef,
  ServiceProvider,
} from "@intentjs/core";
import { GreetingCommand } from "#console/greeting";
import { Schedule } from "@intentjs/core/schedule";

export class ConsoleServiceProvider extends ServiceProvider {
  /**
   * Register any application services here.
   */
  register() {
    this.bind(GreetingCommand);
  }

  /**
   * Bootstrap any application service here.
   */
  boot(app: IntentApplicationContext) {}

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
  async schedules(ref: ModuleRef): Promise<void> {}
}
