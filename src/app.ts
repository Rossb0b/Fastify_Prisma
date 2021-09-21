// Import Third-party Dependencies
import fastify from "fastify";
import cookie, { FastifyCookieOptions } from "fastify-cookie";

// Import Types
import { FastifyInstance } from "fastify/types/instance";

// Import Internal Dependencies
import prismaPlugin from "./plugins/db";
import { APIv1 } from "./routes/v1";
import { customVars } from "./config";


export function buildServer(opts = {}): FastifyInstance {
  const app = fastify(opts);

  // Spread Prisma instance
  app.register(prismaPlugin);
  app.register(cookie, {
    secret: customVars.cookieSecretKey,
    parseOptions: {}
  } as FastifyCookieOptions);


  app.register(APIv1, { prefix: "api/v1" });

  return app;
}

