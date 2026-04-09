import express from "express";
import { config } from "./config";

const app = express();

app.get("/", (req, res) => {
  res.json({ msg: config.message });
});

export default app;