# Coffeeshop Demo app

## Pre-requisites

- [Java 11](https://adoptopenjdk.net/installation.html) and [Maven](https://maven.apache.org/install.html)
- [NodeJS](https://nodejs.org/en/download/)
- [Docker-compose](https://docs.docker.com/compose/install/)

## Run locally

```bash
docker-compose up
cd barista-node/ && npm install && npm start
cd coffeeshop-service/ && mvn compile quarkus:dev
```

## Clean up

```bash
docker-compose down
docker-compose rm
```
