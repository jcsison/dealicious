import { Dialect, Sequelize } from 'sequelize';

import { DBConfig, dbconfig } from './config/dbconfig';

const config: DBConfig = process.env.IS_PRODUCTION
  ? dbconfig.production
  : dbconfig.development;

export const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  { host: config.host, dialect: config.dialect as Dialect }
);

export const initialize = async () => {
  try {
    await sequelize.authenticate();
  } catch (e) {
    console.error('Unable to connect to the database: ', e);
  }
};
