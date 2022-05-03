FROM node:16

WORKDIR /var/www/app

COPY package.json ./

RUN npm install

COPY index.js ./

EXPOSE 3000

cmd ["npm", "server.js"]