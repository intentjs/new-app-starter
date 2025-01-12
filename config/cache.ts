import { CacheOptions, configNamespace } from '@intentjs/core';

export default configNamespace(
  'cache',
  (): CacheOptions => ({
    /**
     * -----------------------------------------------------
     * Default Cache
     * -----------------------------------------------------
     * Documentation - https://tryintent.com/docs/cache
     *
     * This value is the name of the default cache store. This
     * will be used when you use the `Cache` facade to access
     * your cache.
     */
    default: process.env.DEFAULT_CACHE || 'memory',

    /**
     * -----------------------------------------------------
     * Cache Stores
     * -----------------------------------------------------
     * Documentation - https://tryintent.com/docs/cache
     *
     * Inside "stores" you can configure all of your different
     * cache stores that you would want to use in your application.
     *
     * Drivers - "memory", "redis"
     */
    stores: {
      memory: {
        driver: 'memory',
        prefix: '',
      },
    },
  }),
);
