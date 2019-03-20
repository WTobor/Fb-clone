FROM node:11-alpine

WORKDIR /home/node/app

COPY package*.json ./

RUN npm ci

COPY . .

CMD npm run start