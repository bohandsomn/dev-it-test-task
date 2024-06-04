FROM node:18-alpine AS build

WORKDIR /server

COPY package.json yarn.lock ./

RUN yarn

COPY . .

RUN yarn build

FROM node:18-alpine

WORKDIR /server

COPY --from=build /server/package.json /server/yarn.lock ./

COPY --from=build /server/dist ./dist

COPY --from=build /server/node_modules ./node_modules

EXPOSE 4000

CMD ["yarn", "start"]