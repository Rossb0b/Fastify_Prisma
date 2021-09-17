// Import types
import { FastifyInstance } from "fastify/types/instance";


export async function health(server: FastifyInstance) {
  server.get("/health", async function health() {
    return {
      uptime: process.uptime()
    }
  });
}
