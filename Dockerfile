FROM node:16.15

WORKDIR /app

COPY package.json yarn.lock ./

ENV NODE_ENV=production

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 5173
EXPOSE 6006

CMD ["sh", "-c", "./start.sh"]
