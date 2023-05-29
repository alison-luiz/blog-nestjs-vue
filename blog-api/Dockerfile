FROM node:14

WORKDIR ./app

COPY ./blog-api/tsconfig*.json ./
COPY ./blog-api/package.json ./
COPY ./blog-api/.env.example ./.env

RUN yarn install

COPY ./blog-api .

CMD ["yarn", "start:dev"]