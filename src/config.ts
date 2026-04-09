import dotenv from "dotenv";

const env = process.env.APP_ENV || "dev";

// Load env file
dotenv.config({ path: `.env.${env}` });

// Small helper for required vars
const getEnv = (key: string, fallback?: string) => {
  const value = process.env[key] || fallback;
  if (!value) throw new Error(`Missing env var: ${key}`);
  return value;
};

export const config = {
  port: Number(getEnv("PORT", "3000")),
  message: getEnv("MESSAGE", "Hello"),
};