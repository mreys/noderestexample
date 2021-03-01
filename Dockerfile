FROM node:10-slim

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . . 

EXPOSE 3002

CMD ["npm", "start"]

