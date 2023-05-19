import dontenv from 'dotenv';

dontenv.config();

const config = {
  env: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || 3002,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  dbPort: process.env.DB_PORT,
  mongodb: process.env.MONGODB_URI
};

export default config;
