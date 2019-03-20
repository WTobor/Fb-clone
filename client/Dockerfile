FROM node:11-alpine

WORKDIR /home/node/app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build -- -p

CMD npm run start