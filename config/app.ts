import { AppConfig } from '@intent/core/lib';
import { registerAs } from '@nestjs/config';

export default registerAs(
  'app',
  () =>
    ({
      name: process.env.APP_NAME || 'Intent App',
      env: process.env.APP_ENV || 'local',
      debug: +process.env.APP_DEBUG || true,
      url: process.env.APP_URL || 'localhost',
      port: +process.env.APP_PORT || 5000,
      cors: { origin: true },

      locale: 'en',
      currency: 'INR',
    }) as AppConfig,
);
