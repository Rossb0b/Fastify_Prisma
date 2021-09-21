// Import types
import { FastifyInstance } from "fastify/types/instance";
import * as UserController from "./controller/index";


export async function user(server: FastifyInstance) {
  server.post("/user", UserController.register);
  server.get("/session", UserController.signIn);
}
