import Fastify, { FastifyRequest, FastifyReply } from 'fastify';

export const fastify = Fastify({
  logger: process.env.ENV !== 'test'
});

fastify.get('/', async (_request: FastifyRequest, _reply: FastifyReply) => {
  return {
    status: 'Success',
    result: process.env.ABOUT_MESSAGE ?? ''
  };
});
