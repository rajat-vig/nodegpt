"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const env = process.env.APP_ENV || "dev";
// ALWAYS load env file (for local + QA)
dotenv_1.default.config({ path: `.env.${env}` });
exports.config = {
    port: process.env.PORT || 3000,
    message: process.env.MESSAGE || "Hello",
};
