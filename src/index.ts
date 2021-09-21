// Import Internal Dependencies
import { buildServer } from "./app";


const server = buildServer({
  logger: true
});

server.listen(process.env.PORT, process.env.HOST, function httpListeningCallback(err, addr) {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }

  server.log.info(`Server listening on ${addr}`);
});
