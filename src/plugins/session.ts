// Import Third-party Dependencies
import fp from "fastify-plugin";
import { Unauthorized } from "http-errors";

// Import types
import { FastifyInstance } from "fastify/types/instance";
import { FastifyRequest } from "fastify/types/request";


async function stickySession(server: FastifyInstance) {
  server.addHook("preHandler", checkStickySession);
}

async function checkStickySession(req: FastifyRequest) {
  const sessionCookie = req.cookies.sessionId;

  if (!sessionCookie) {
    throw new Unauthorized("Unauthorized");
  }

  const verifiedCookie = req.unsignCookie(sessionCookie);

  if (!verifiedCookie.valid) {
    throw new Unauthorized("Unauthorized");
  }
}

export const sessionPlugin = fp(stickySession, { name: "stickySession"});
