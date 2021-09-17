// Import types
import { FastifyRequest } from "fastify/types/request";
import { FastifyReply } from "fastify/types/reply";
import { FastifyInstance } from "fastify/types/instance";

// Import Internal Dependencies
import { Prisma } from "@prisma/client";


export async function user(server: FastifyInstance) {
  server.post("/user", register);
}

async function register(req: FastifyRequest, reply: FastifyReply) {
  const { email, firstname, lastname  } = req.body as Prisma.UserCreateInput;

  const user = await req.server.prisma.user.create({
    data: {
      email,
      firstname,
      lastname
    }
  });

  reply.status(200).send(user);
};
