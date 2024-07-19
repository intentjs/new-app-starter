import { StorageOptions } from '@intentjs/core/';
import { registerAs } from '@nestjs/config';
import { path } from 'app-root-path';

export default registerAs(
  'filesystem',
  () =>
    ({
      default: 'data',
      disks: {
        data: { driver: 'local', basePath: path, baseUrl: '' },
      },
    }) as StorageOptions,
);
