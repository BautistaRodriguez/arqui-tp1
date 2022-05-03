FROM node:16

WORKDIR /var/www/app

COPY ./app/package.json ./

RUN npm install

COPY ./app/server.js ./

EXPOSE 3000

cmd ["node", "server.js"]