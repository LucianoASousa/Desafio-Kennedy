FROM node:16.15

WORKDIR /app

COPY package.json yarn.lock ./
COPY . .

RUN yarn install

RUN yarn dev

EXPOSE 5173

CMD ["sh", "-c", "yarn preview && yarn storybook"]