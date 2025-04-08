import { IConfig } from './interfaces';

export default (): IConfig => ({
  port: parseInt(process.env.PORT || '5000', 10),
  database: {
    database: process.env.DB_NAME || '',
    host: process.env.DB_HOST || '',
    port: parseInt(process.env.DB_PORT || '5432', 10),
    user: process.env.DB_USER || 'postgres',
    password: process.env.BD_PASSWORD || '1',
  },
});
