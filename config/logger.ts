import {
  Formats,
  IntentLoggerOptions,
  Transports,
} from '@intent/core/dist/lib/logger/options';
import { registerAs } from '@nestjs/config';

export default registerAs(
  'logger',
  () =>
    ({
      isGlobal: true,
      default: 'app',
      disableConsole: false,
      loggers: {
        app: {
          level: 'debug',
          transports: [
            {
              transport: Transports.Console,
              format: Formats.Default,
            },
          ],
        },
      },
    }) as IntentLoggerOptions,
);
