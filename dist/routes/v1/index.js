"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIv1 = void 0;
// Import Internal Dependencies
const index_1 = require("./user/index");
const health_1 = require("./health");
const event_1 = require("./event");
const secured_1 = require("./secured");
async function APIv1(server) {
    server.register(health_1.health);
    server.register(index_1.user);
    server.register(event_1.event);
    server.register(secured_1.authenticatedAPI, { prefix: "/secured" });
}
exports.APIv1 = APIv1;
