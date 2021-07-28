"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = exports.firebase = exports.database = void 0;
var app_1 = __importDefault(require("firebase/app"));
exports.firebase = app_1.default;
require("firebase/firestore");
require('dotenv').config();
var config = {
    apiKey: process.env.NODE_APP_API_KEY,
    authDomain: process.env.NODE_APP_AUTH_DOMAIN,
    projectId: process.env.NODE_APP_PROJECT_ID,
    storageBucket: process.env.NODE_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.NODE_APP_MESSAGING_SENDER_ID,
    appId: process.env.NODE_APP_APP_ID
};
exports.config = config;
app_1.default.initializeApp(config);
var database = app_1.default.firestore();
exports.database = database;
