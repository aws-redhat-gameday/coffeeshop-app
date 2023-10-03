# docker build . -t coffeeshop-service -f coffeeshop-service/Dockerfile --platform linux/amd64
# aws ecr-public get-login-password --region us-east-1 | docker login --username AWS --password-stdin public.ecr.aws/t7z4c1o2
# docker tag coffeeshop-service:latest public.ecr.aws/t7z4c1o2/coffeeshop-service:latest
# docker push public.ecr.aws/t7z4c1o2/coffeeshop-service:latest
FROM maven:3.6.3-openjdk-11-slim

WORKDIR /work
COPY pom.xml /work/
COPY coffeeshop-service/ /work/coffeeshop-service

EXPOSE 8080
RUN cd /work/coffeeshop-service && mvn package -DskipTests
ENTRYPOINT [ "java", "-jar" , "/work/coffeeshop-service/target/coffeeshop-service-1.0-SNAPSHOT-runner.jar", "-Dquarkus.http.host=0.0.0.0", "-Djava.util.logging.manager=org.jboss.logmanager.LogManager"]