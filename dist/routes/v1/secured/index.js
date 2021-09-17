"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticatedAPI = void 0;
// Import Internal Dependencies
const authentication_1 = require("./../../../plugins/authentication");
const Event_1 = require("./Event");
async function authenticatedAPI(server) {
    server.register(authentication_1.authenticationPlugin);
    server.register(Event_1.event);
}
exports.authenticatedAPI = authenticatedAPI;
