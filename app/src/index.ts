import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import fs from 'fs';
import log4js from 'log4js';
import morgan from 'morgan';
import path from 'path';
import { scopePerRequest, loadControllers } from 'awilix-express';

import * as SequelizeInstance from './database/sequelize';
import { DomainError } from './error';
import { UNAUTHORIZED_ERROR } from './resource/validate-or-throw';
import { awilixContainer } from './di-container';

export const IS_PROD = process.env.IS_PRODUCTION !== undefined;

const app = express();
const logger = log4js.getLogger('app');

dotenv.config();

// use CORS in prod
if (!IS_PROD) {
  app.use(cors());
}

// Logging
log4js.configure({
  appenders: { app: { type: 'file', filename: 'logs/app.log' } },
  categories: {
    default: { appenders: ['app'], level: IS_PROD ? 'warn' : 'info' }
  }
});

const accessLogStream = fs.createWriteStream('logs/access.log', {
  flags: 'a'
});

app.use(morgan('combined', { stream: accessLogStream }));
app.use(scopePerRequest(awilixContainer));
app.use(loadControllers('resource/*-resource.ts', { cwd: __dirname }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Production static frontend
app.use(express.static(path.join(__dirname, '..', 'build_fe')));
app.get('*', (_req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build_fe', 'index.html'));
});

app.use(
  (
    err: DomainError,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    if (err.type === UNAUTHORIZED_ERROR) {
      const msg = `Forbidden ${req.url}`;
      logger.warn(msg);
      res.status(403).send(msg);
    } else {
      next(err);
    }
  }
);

SequelizeInstance.initialize().then(() => {
  console.log('App is initialized, IS_PROD is ' + IS_PROD);
  app.listen(process.env.PORT ?? 8000);
});
