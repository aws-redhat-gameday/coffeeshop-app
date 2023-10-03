# docker build . -t barista-node --platform linux/amd64
# aws ecr-public get-login-password --region us-east-1 | docker login --username AWS --password-stdin public.ecr.aws/t7z4c1o2
# docker tag barista-node:latest public.ecr.aws/t7z4c1o2/barista-node:latest
# docker push public.ecr.aws/t7z4c1o2/barista-node:latest

FROM registry.access.redhat.com/ubi8/nodejs-14-minimal

WORKDIR /app

COPY package*.json ./
RUN npm i
COPY . /app/dist
CMD ["node", "dist/main.js"]
