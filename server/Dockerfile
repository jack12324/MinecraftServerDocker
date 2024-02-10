FROM ubuntu:latest
ARG JAVA_VERSION
USER root
COPY ./server/preload/* /loaded/
WORKDIR ./server

RUN apt-get update && \
    apt-get install dos2unix -y && \
    apt-get install python3 -y && \
    apt-get install openjdk-$JAVA_VERSION-jre -y && \
    apt-get clean

CMD cp ../loaded/* . && dos2unix ./launch.sh && dos2unix ./jack_start_server.sh && ./jack_start_server.sh


