FROM public.ecr.aws/lambda/nodejs:20 AS builder

WORKDIR /buildroot
COPY . .
RUN npm ci && npm run build

FROM public.ecr.aws/lambda/nodejs:20

COPY --from=builder /buildroot/dist/lambda ${LAMBDA_TASK_ROOT}

CMD [ "index.handler" ]