// Import types
import { FastifyInstance } from "fastify/types/instance";

// Import Internal Dependencies
import { sessionPlugin } from "../../../plugins/session";
import { authenticationPlugin } from "./../../../plugins/authentication";
import { event } from "./Event";


export async function authenticatedAPI(server: FastifyInstance) {
  // server.register(authenticationPlugin);
  server.register(sessionPlugin);

  server.register(event);
}
