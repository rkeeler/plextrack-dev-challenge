FROM node:15.7.0

RUN mkdir -p /usr/src/app
COPY . /usr/src/app

WORKDIR /usr/src/app

EXPOSE 80

ENTRYPOINT ["node", "start.js"]
