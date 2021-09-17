"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticationPlugin = void 0;
// Import Third-party Dependencies
const fastify_plugin_1 = __importDefault(require("fastify-plugin"));
const http_errors_1 = require("http-errors");
async function authentication(server) {
    server.addHook("preHandler", checkAuthentication);
}
async function checkAuthentication(req) {
    const authorizationHeader = "test second";
    const [, rawToken] = authorizationHeader.split(" ");
    try {
        console.log(rawToken);
    }
    catch (error) {
        throw new http_errors_1.Unauthorized(error.message);
    }
}
exports.authenticationPlugin = (0, fastify_plugin_1.default)(authentication, { name: "authentication" });
