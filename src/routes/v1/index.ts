// Import types
import { FastifyInstance } from "fastify/types/instance";

// Import Internal Dependencies
import { user } from "./user/index";
import { health } from "./health";
import { event } from "./event";
import { authenticatedAPI } from "./secured";


export async function APIv1(server: FastifyInstance) {
  server.register(health);
  server.register(user);
  server.register(event);

  server.register(authenticatedAPI, { prefix: "/secured" });
}
