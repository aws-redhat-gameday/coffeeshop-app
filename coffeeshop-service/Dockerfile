# docker build . -t coffeeshop-service -f coffeeshop-service/Dockerfile --platform linux/amd64

FROM maven:3.6.3-openjdk-11-slim

WORKDIR /work
COPY pom.xml /work/
COPY coffeeshop-service/ /work/coffeeshop-service

EXPOSE 8080
RUN cd /work/coffeeshop-service && mvn package -DskipTests
ENTRYPOINT [ "java", "-jar" , "/work/coffeeshop-service/target/coffeeshop-service-1.0-SNAPSHOT-runner.jar", "-Dquarkus.http.host=0.0.0.0", "-Djava.util.logging.manager=org.jboss.logmanager.LogManager"]