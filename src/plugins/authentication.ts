// Import Third-party Dependencies
import fp from "fastify-plugin";
import { Unauthorized } from "http-errors";

// Import types
import { FastifyInstance } from "fastify/types/instance";
import { FastifyRequest } from "fastify/types/request";

// Import internal dependencies
import { customVars } from "../config";

async function authentication(server: FastifyInstance) {
  server.addHook("preHandler", checkAuthentication);
}

async function checkAuthentication(req: FastifyRequest) {
  const authorizationHeader = "test second";

  const [, rawToken] = authorizationHeader.split(" ");

  try {
    console.log(rawToken);
  }
  catch (error) {
    throw new Unauthorized(error.message);
  }
}

export const authenticationPlugin = fp(authentication, { name: "authentication" });
