"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.event = void 0;
async function event(server) {
    server.get("/event", getAll);
}
exports.event = event;
async function getAll(req, reply) {
    const events = await req.server.prisma.event.findMany();
    reply.status(200).send(events);
}
;
