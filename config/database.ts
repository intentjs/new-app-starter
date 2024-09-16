import { DatabaseOptions, registerAs } from '@intentjs/core';
import { knexSnakeCaseMappers } from 'objection';

export default registerAs(
  'db',
  (): DatabaseOptions => ({
    isGlobal: true,
    default: 'sqlite',
    connections: {
      sqlite: {
        client: 'sqlite3',
        useNullAsDefault: true,
        debug: !!+process.env.DB_DEBUG,
        connection: {
          filename: process.env.DB_FILENAME,
        },
        migrations: {
          directory: './database/migrations',
        },
        ...knexSnakeCaseMappers(),
      },
    },
  }),
);
