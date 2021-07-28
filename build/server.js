"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var express_1 = __importDefault(require("express"));
require("express-async-errors");
var routes_1 = require("./routes");
require('dotenv').config();
var port = Number(process.env.NODE_APP_PORT);
var server = express_1.default();
server.use(express_1.default.json());
server.use(routes_1.router);
server.use(function (err, req, res, next) {
    if (err instanceof Error) {
        return res.status(400).json({ err: err.message });
    }
    return res.status(500).json({ err: 'Internal server error!' });
});
server.listen(port, function () { return console.log("Running at PORT: " + port); });
exports.default = server;
