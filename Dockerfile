FROM node:13.10-alpine

WORKDIR /srv/app

COPY . .

RUN yarn global add @nestjs/cli --prefix /usr/local

RUN yarn

EXPOSE 3000
CMD ["yarn", "run", "start:dev"]