FROM node:alpine3.16 as builder

RUN mkdir /app
WORKDIR /app

COPY . .

RUN npm ci
RUN NODE_ENV=production npm run build

FROM node:alpine3.16 as production
ENV NODE_ENV=production

RUN mkdir /app
COPY --from=builder /app/package.json /app/package.json
COPY --from=builder /app/package-lock.json /app/package-lock.json
COPY --from=builder /app/build /app/build
COPY --from=builder /app/public /app/public
WORKDIR /app

RUN npm ci --ignore-scripts --omit dev

CMD ["npm", "start"]
