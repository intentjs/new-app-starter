import { HttpConfig } from "@intentjs/core/http";
import { configNamespace } from "@intentjs/core/config";
import { join } from "path";
import { findProjectRoot } from "@intentjs/core/helpers";

export default configNamespace(
  "http",
  (): HttpConfig => ({
    /**
     * -----------------------------------------------------
     * Cross Origin Resource Sharing
     * -----------------------------------------------------
     *
     * You can use this setting to define the CORS rule of
     * your application.
     */
    cors: {
      origin: true,
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
      allowedHeaders: ["Content-Type", "Authorization"],
      credentials: true,
    },

    server: {
      max_body_buffer: 100000000,
      max_body_length: 100000000,
    },

    staticServe: {
      httpPath: "assets",
      filePath: join(findProjectRoot(), "storage/uploads"),
      keep: {
        extensions: ["css", "js", "json", "png", "jpg", "jpeg"],
      },
      cache: {
        max_file_count: 1000,
        max_file_size: 4 * 1024 * 1024,
      },
    },
  })
);
