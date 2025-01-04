import Fastify, { FastifyRequest, FastifyReply } from 'fastify';

export const fastify = Fastify();

// GET requests
fastify.get('/', {}, async (_request: FastifyRequest, _reply: FastifyReply) => {
  return {
    status: 'Success',
    result: `${process.env.ABOUT_MESSAGE}`
  };
});

// @eslint-disable no-console
fastify.listen({ port: 3000 }, (err: Error | null) => {
  const address = fastify.server.address();
  if (typeof address === 'string') {
    // eslint-disable-next-line no-console
    console.log(`Server listening on ${address}`);
  } else if (address && 'port' in address) {
    // eslint-disable-next-line no-console
    console.log(`Server listening on ${address.port}`);
  } else {
    // eslint-disable-next-line no-console
    console.error('Failed to get server address');
  }
  if (err) throw err;
});
