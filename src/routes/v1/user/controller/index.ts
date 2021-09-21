// Import Node.js Dependencies
import crypto from "crypto";

// Import types
import { FastifyRequest } from "fastify/types/request";
import { FastifyReply } from "fastify/types/reply";

// Import Internal Dependencies
import { Prisma } from "@prisma/client";
import { customVars } from "../../../../config";

// CONST
const kAlgorithm = "aes-256-ctr";
const kSecret = customVars.passwordSecretKey;
const iv = crypto.randomBytes(16);


export async function register(req: FastifyRequest, reply: FastifyReply): Promise<Prisma.UserCreateInput> {
  const { email, firstname, lastname, password  } = req.body as Prisma.UserCreateInput;

  const cipher = crypto.createCipheriv(kAlgorithm, kSecret, iv);

  const encrypted = Buffer.concat([cipher.update(password), cipher.final()]);

  console.log(iv.toString("hex"), encrypted.toString("hex"));

  const user = await req.server.prisma.user.create({
    data: {
      email,
      password: encrypted.toString("hex"),
      firstname,
      lastname
    }
  });

  return user;
};

export async function signIn(req: FastifyRequest, reply: FastifyReply) {
  reply.setCookie("sessionId", "2", {
    domain: "localhost:3000",
    maxAge: 60,
    signed: true
  });

  reply.statusCode = 204;

  return;
}
