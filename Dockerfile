FROM node:14

LABEL base.name="frontend"

ENV NODE_ENV=production

WORKDIR /app

COPY ["package*.json", "./"]

RUN npm install --production

COPY . .

EXPOSE 80
CMD ["node","server.js"]