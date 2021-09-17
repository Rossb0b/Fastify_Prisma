"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildServer = void 0;
// Import Third-party Dependencies
const fastify_1 = __importDefault(require("fastify"));
// Import Internal Dependencies
const db_1 = __importDefault(require("./plugins/db"));
const v1_1 = require("./routes/v1");
function buildServer(opts = {}) {
    const app = (0, fastify_1.default)(opts);
    // Spread Prisma instance
    app.register(db_1.default);
    app.register(v1_1.APIv1, { prefix: "api/v1" });
    return app;
}
exports.buildServer = buildServer;
