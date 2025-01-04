FROM node:lts-buster-slim AS base

RUN apt-get update && apt-get install libssl-dev ca-certificates -y
WORKDIR /app

COPY package*.json ./

FROM base AS build

RUN export NODE_ENV=production
RUN npm i --save sharp

ARG DATABASE_URL
ENV DATABASE_URL=$DATABASE_URL

COPY . .
RUN npx prisma migrate dev --name initialize
RUN npm run postinstall
RUN npm run build

FROM base AS prod-build

COPY prisma prisma
RUN npm ci
RUN npm run postinstall
RUN cp -R node_modules prod_node_modules

FROM base AS prod

COPY --from=prod-build /app/prod_node_modules /app/node_modules
COPY --from=build  /app/.next /app/.next
COPY --from=build  /app/public /app/public
COPY --from=build  /app/prisma /app/prisma