import { fastify } from '#src/app';

fastify.listen({ port: 3000 }, (err: Error | null) => {
  if (err) throw err;
  const address = fastify.server.address();
  if (typeof address === 'string') {
    fastify.log.info(`Server listening on ${address}`);
  } else if (address !== null) {
    fastify.log.info(`Server listening on port ${address.port}`);
  }
});
