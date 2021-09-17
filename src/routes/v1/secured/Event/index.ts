// Import types
import { FastifyRequest } from "fastify/types/request";
import { FastifyReply } from "fastify/types/reply";
import { FastifyInstance } from "fastify/types/instance";

// Import Internal Dependencies
import { Prisma } from "@prisma/client";


export async function event(server: FastifyInstance) {
  server.post("/event", create);
}

async function create(req: FastifyRequest, reply: FastifyReply) {
  const { name, description, price, capacity, tag  } = req.body as Prisma.EventCreateInput;

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
};
