# services/frontend/Dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package.json .
RUN npm install

COPY src/ .

EXPOSE 9999

CMD ["npm", "start"]
