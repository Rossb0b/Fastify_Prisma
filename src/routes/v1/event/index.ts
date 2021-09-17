// Import types
import { FastifyRequest } from "fastify/types/request";
import { FastifyReply } from "fastify/types/reply";
import { FastifyInstance } from "fastify/types/instance";


export async function event(server: FastifyInstance) {
  server.get("/event", getAll);
}

async function getAll(req: FastifyRequest, reply: FastifyReply) {
  const events = await req.server.prisma.event.findMany();

  reply.status(200).send(events);
};
