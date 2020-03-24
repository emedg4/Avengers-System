FROM node:10 AS builder
WORKDIR  /app
COPY ./package.json .
RUN npm install --only=prod
COPY . .

FROM node:10-alpine
WORKDIR /app
COPY --from=builder /app ./
CMD ["npm", "run", "start"]

