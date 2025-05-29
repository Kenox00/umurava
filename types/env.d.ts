// This file extends the Environment variables TypeScript definitions
declare namespace NodeJS {
  interface ProcessEnv {
    MONGODB_URI?: string;
    NODE_ENV: 'development' | 'production' | 'test';
  }
}
