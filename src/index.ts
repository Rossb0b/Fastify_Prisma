// Import Internal Dependencies
import { buildServer } from "./app";


const server = buildServer({
  logger: true
});

server.listen("3000", "localhost", function httpListeningCallback(err, addr) {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }

  server.log.info(`Server listening on ${addr}`);
});
