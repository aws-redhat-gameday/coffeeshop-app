# docker build . -t coffeeshop-service --platform linux/amd64

FROM docker.io/maven:3.6.3-openjdk-11-slim

WORKDIR /work
COPY . /work

EXPOSE 8080
RUN cd /work && mvn package -DskipTests
ENTRYPOINT [ "java", "-jar" , "/work/target/coffeeshop-service-1.0-SNAPSHOT-runner.jar", "-Dquarkus.http.host=0.0.0.0", "-Djava.util.logging.manager=org.jboss.logmanager.LogManager"]
