FROM public.ecr.aws/lambda/nodejs:20

COPY ./dist/lambda/index.js ${LAMBDA_TASK_ROOT}

COPY package*.json ./
RUN npm ci

CMD [ "index.handler" ]