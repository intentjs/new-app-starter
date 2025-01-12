import { QueueOptions, configNamespace } from '@intentjs/core';

export default configNamespace('queue', (): QueueOptions => {
  return {
    /**
     * -----------------------------------------------------
     * Default Queue Driver
     * -----------------------------------------------------
     * Documentation - https://tryintent.com/docs/queues
     *
     * This value is the name of the default queue driver.
     * This will be used to determine the messag queue where
     * the message should be processed.
     */
    default: process.env.DEFAULT_QUEUE || 'sync',

    /**
     * -----------------------------------------------------
     * Queue Drivers
     * -----------------------------------------------------
     * Documentation - https://tryintent.com/docs/queues
     *
     * You can define different queue connections inside the
     * "connections" attribute.
     *
     * Available Queue Drivers - "sync", "sqs", "redis", "db"
     */
    connections: {
      db: {
        driver: 'db',
        listenerType: 'poll',
        table: 'intent_jobs',
        queue: 'default',
      },
    },
  };
});
