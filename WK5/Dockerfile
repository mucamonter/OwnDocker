FROM node:20-alpine3.16 as builder

WORKDIR /app

#Selecting dependences image

COPY package*.json /app/
#Transfer all files that have package and .json to /app

RUN npm ci
#Clean install, remove all the unnecessary files deleting all node_modules and install the exact dependencys.

COPY . .
#Load all files and make cache without dependences that changes every time

FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/src ./src
RUN npm ci --only=production
CMD [ "node", "dist/server.js" ]


