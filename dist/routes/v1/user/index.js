"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
async function user(server) {
    server.post("/user", register);
}
exports.user = user;
async function register(req, reply) {
    const { email, firstname, lastname } = req.body;
    const user = await req.server.prisma.user.create({
        data: {
            email,
            firstname,
            lastname
        }
    });
    reply.status(200).send(user);
}
;
