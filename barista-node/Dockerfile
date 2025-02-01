# docker build . -t barista-node --platform linux/amd64

FROM registry.access.redhat.com/ubi9/nodejs-20-minimal

WORKDIR /app

COPY package*.json ./
RUN npm i
COPY . /app/dist
CMD ["node", "dist/main.js"]
