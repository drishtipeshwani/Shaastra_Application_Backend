import { ConnectionOptions } from 'typeorm';
import dotenv from 'dotenv';

dotenv.config();



const dir = 'src';

const config: ConnectionOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DEV_DB,
  synchronize: true,
  logging: false,
  entities: [`${dir}/database/entity/**/*.{ts,js}`],
  migrations: [`${dir}/database/migrations/**/*.{ts,js}`],
  subscribers: [`${dir}/database/subscriber/**/*.{ts,js}`],
  cli: {
    migrationsDir: `${dir}/database/migrations`,
    entitiesDir: `${dir}/database/entity`,
    subscribersDir: `${dir}/database/subscriber`,
  },
};

export = config;