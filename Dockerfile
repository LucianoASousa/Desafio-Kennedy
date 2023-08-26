FROM node:16.15

WORKDIR /app

COPY package.json yarn.lock ./
COPY . .

RUN yarn install

RUN yarn build

EXPOSE 5173
EXPOSE 6006

CMD ["sh", "-c", "yarn preview && yarn storybook"]