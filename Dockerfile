# Build stage
FROM node:12-alpine as build

WORKDIR /app

COPY . .

RUN npm install

RUN npm run translate-messages

RUN npm run build

# Run prod stage
FROM node:12-alpine

ENV NODE_ENV production

WORKDIR /app

COPY --from=build ./app/dist ./dist

COPY package*.json ./
RUN npm install --production

EXPOSE 80

CMD [ "node", "dist/bin/www.js" ]
