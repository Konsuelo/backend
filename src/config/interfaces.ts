export interface IDBConfig {
  database: string;
  host: string;
  port: number;
  user: string;
  password: string;
}
export interface IConfig {
  port: number;
  database: IDBConfig;
}
