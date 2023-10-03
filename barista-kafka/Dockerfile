# docker build . -t barista-kafka -f barista-kafka/Dockerfile --platform linux/amd64
# aws ecr-public get-login-password --region us-east-1 | docker login --username AWS --password-stdin public.ecr.aws/t7z4c1o2
# docker tag barista-kafka:latest public.ecr.aws/t7z4c1o2/barista-kafka:latest
# docker push public.ecr.aws/t7z4c1o2/barista-kafka:latest

FROM maven:3.6.3-openjdk-11-slim

WORKDIR /work
COPY pom.xml /work/
COPY barista-kafka/ /work/barista-kafka

EXPOSE 8080
RUN cd /work/barista-kafka && mvn package -DskipTests
ENTRYPOINT [ "java", "-jar" , "/work/barista-kafka/target/barista-kafka-1.0-SNAPSHOT-runner.jar", "-Dquarkus.http.host=0.0.0.0", "-Djava.util.logging.manager=org.jboss.logmanager.LogManager"]