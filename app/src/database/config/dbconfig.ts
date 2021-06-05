import config from './config.json';

export interface DBConfig {
  username: string;
  password: string | null;
  database: string;
  host: string;
  dialect: string;
}

interface DeployDBConfig {
  development: DBConfig;
  production: DBConfig;
}

export const dbconfig: DeployDBConfig = config;
