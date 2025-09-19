FROM node:20 AS build

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run tsc

FROM node:20

WORKDIR /usr/src/app

COPY --from=build /usr/src/app/build ./build
COPY package*.json ./
RUN npm ci --only=production

EXPOSE 3000

CMD ["npm", "start"]
