import { IntentApplicationContext, ServiceProvider } from "@intentjs/core";
import { GreetingCommand } from "#console/greeting";

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
}
