FROM node:20.18.1-slim AS base

WORKDIR /home/app

COPY package*.json ./

RUN npm i

COPY . .

FROM base AS production

ENV NODE_PATH=./build

RUN npm run build