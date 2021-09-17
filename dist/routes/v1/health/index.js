"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.health = void 0;
async function health(server) {
    server.get("/health", async function health() {
        return {
            uptime: process.uptime()
        };
    });
}
exports.health = health;
