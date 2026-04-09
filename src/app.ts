import express from "express";
import { config } from "./config";

const app = express();

app.get("/", (req, res) => {
  res.json({ msg: config.message });
});

// Health check endpoint (QA only)
if (process.env.APP_ENV === "qa") {
  app.get("/health", (req, res) => {
    res.status(200).json({
      status: "ok",
      env: process.env.APP_ENV,
      message: config.message,
      timestamp: new Date().toISOString()
    });
  });
}

export default app;