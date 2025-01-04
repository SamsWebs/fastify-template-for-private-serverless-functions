# Fastify Template for Private Serverless APIs

This is a template for creating a private serverless API using Fastify and AWS Lambda. It is intended to be used as a starting point for new projects.

## Overview

The templates is written in TypeScript and runs on Node.js. We leverage the [Fastify framework](https://github.com/fastify/fastify) for handling HTTP requests/responses.  Our API is stateless and is intended to run ephemerally on serverless environments (currently AWS Lambda). We achieve this by wrapping our code with the `@fastify/aws-lambda` wrapper. You can still develop locally, however, by starting the Fastify server via `npm run start`.

## Setup

1. Create a new repository from this template and clone it!
2. Install dependencies with `npm install` or `npm i`.
3. Create `.env` via `cp .envrc.example .envrc` and fill in the necessary environment variables.  This file type assumes you are using `direnv` to manage your environment variables.  If you are not, export the variables in your shell or use a different method.
4. Start your local server with `npm run dev`.
5. Start developing!

## Development

When developing, please ensure Husky is enabled.  This will run linting and tests before you commit your code and run tests before you push your code.  This is to ensure that the codebase is consistent and that tests are passing before you push your code.  To enable Husky, run `npx husky` in the root of your project.

**Important things to note:**

- The private API templates avoids using AWS API Gateway, so we are limited to only being called from within the AWS ecosystem.  There are no Terraform code to deploy an API Gateway in this template.
- The "private API" templates are intended to be used for APIs that are not intended to be public.  This means that you should not expose your API to the public internet.  If you need to expose your API to the public internet, you should consider creating a repository from the "Django Public REST API" template.

## Deployment

This template is intended to be deployed to AWS Lambda.  You can deploy your code by running the `deploy.yml` GitHub Action. A pre-requisite is the necessary infrastructure to be set up in AWS via the Terraform code in the `.infrastructure` directory.  This will create the necessary resources for your Lambda function to run.  Please see the [README](.infrastructure/README.md) in the `.infrastructure` directory for more information.
