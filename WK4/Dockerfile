FROM node:20-alpine3.16 as builder

WORKDIR /app

COPY package*.json /app/
# it changes more, I don't want break the whole cache beacuse of that

RUN npm ci
# the npm were installed in from node:20 ...
# npm ci is so much better and means clean install

COPY . .
#Now you can make cache, run faster

# RUN npm run build

FROM node:20-alpine
WORKDIR /app

# COPY --from=builder /app/dist ./dist

COPY --from=builder /app/package*.json ./
# COPY --from=builder /app/node_modules ./node_modules
#all this files will be deleted

COPY --from=builder /app/src ./src

RUN npm ci --only=production
#will be deleted here

CMD ["node", "dist/server.js"]