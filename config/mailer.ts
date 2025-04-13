import { configNamespace } from "@intentjs/core/config";
import { MailerOptions } from "@intentjs/core/mail";

export default configNamespace(
  "mailers",
  (): MailerOptions => ({
    /**
     * The default channel for your mailer.
     */
    default: process.env.DEFAULT_MAILER || "logger",

    /**
     * -----------------------------------------------------
     * Mailer Channels
     * -----------------------------------------------------
     *
     * Here you can configure all your different mailer channels.
     * A default configuration has been added for your application.
     *
     * Channel Providers: "logger", "smtp", "mailgun", "resend"
     */
    channels: {
      logger: {
        provider: "logger",
      },
    },

    template: {
      appName: process.env.APP_NAME,
      footer: {
        title: process.env.APP_NAME,
      },
    },
  })
);
