"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import Internal Dependencies
const app_1 = require("./app");
const server = (0, app_1.buildServer)({
    logger: true
});
server.listen("3000", "localhost", function httpListeningCallback(err, addr) {
    if (err) {
        server.log.error(err);
        process.exit(1);
    }
    server.log.info(`Server listening on ${addr}`);
});
