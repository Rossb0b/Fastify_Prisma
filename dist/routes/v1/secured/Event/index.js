"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.event = void 0;
async function event(server) {
    server.post("/event", create);
}
exports.event = event;
async function create(req, reply) {
    const { name, description, price, capacity, tag } = req.body;
    const event = await req.server.prisma.event.create({
        data: {
            name,
            description,
            price,
            capacity,
            tag
        }
    });
    reply.status(200).send(event);
}
;
