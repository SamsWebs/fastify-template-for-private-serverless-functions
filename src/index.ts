import awsLambdaFastify from '@fastify/aws-lambda';
import { APIGatewayEvent, Context } from 'aws-lambda';
import { fastify } from '#src/app';

const proxy = awsLambdaFastify(fastify);

export async function handler(event: APIGatewayEvent, context: Context) {
  return await proxy(event, context);
}
