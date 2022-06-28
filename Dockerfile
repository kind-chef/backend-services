FROM node:lts-alpine3.15

EXPOSE 8090

RUN mkdir /kind-chef

WORKDIR /kind-chef

RUN apk update

RUN apk add curl 

COPY . .

RUN npm install

CMD npm start