# Fastify Template for Private Serverless APIs

This is a template for creating a private serverless API using Fastify and AWS Lambda. It is intended to be used as a starting point for new projects.

## Overview

The templates is written in TypeScript and runs on Node.js. We leverage the [Fastify framework](https://github.com/fastify/fastify) for handling HTTP requests/responses.  Our API is stateless and is intended to run ephemerally on serverless environments (currently AWS Lambda). We achieve this by wrapping our code with the `@fastify/aws-lambda` wrapper. You can still develop locally, however, by starting the Fastify server via `npm run start`.

## Setup

1. Create a new repository from this template and clone it!
2. Install dependencies with `npm install`.
3. Create `.env` via `cp .env.example .env` and fill in the necessary environment variables.
4. Start your local server with `npm run start`
5. Start developing!
