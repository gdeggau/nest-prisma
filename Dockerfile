FROM node:16.13.2

RUN npm install -g @nestjs/cli@8.0.0

USER node

WORKDIR /home/node/app
