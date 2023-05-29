FROM node:14

WORKDIR ./app

RUN npm install -g http-server

COPY ./blog-front/tsconfig*.json ./
COPY ./blog-front/package.json ./

RUN yarn install

COPY ./blog-front .

CMD ["yarn", "serve"]
EXPOSE 8080