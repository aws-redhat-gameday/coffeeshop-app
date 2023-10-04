# docker build . -t barista-node --platform linux/amd64

FROM registry.access.redhat.com/ubi8/nodejs-14-minimal

WORKDIR /app

COPY package*.json ./
RUN npm i
COPY . /app/dist
CMD ["node", "dist/main.js"]
