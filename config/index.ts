import app from "./app.js";
import auth from "./auth.js";
import logger from "./logger.js";
import storage from "./filesystem.js";
import localization from "./locale.js";
import mailer from "./mailer.js";
import database from "./db.js";
import cache from "./cache.js";
import queue from "./queue.js";
import http from "./http.js";

export default [
  app,
  auth,
  cache,
  database,
  localization,
  logger,
  mailer,
  queue,
  storage,
  http,
];
