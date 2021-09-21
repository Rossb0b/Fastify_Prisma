// Import types
import { FastifyInstance } from "fastify/types/instance";


export async function health(server: FastifyInstance) {
  server.get("/health", async function health() {
    return {
      name: "Random Service",
      description: "Service description",
      version: "1.0.0",
      uptime: process.uptime()
    }
  });
}
