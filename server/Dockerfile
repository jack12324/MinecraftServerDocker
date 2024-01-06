FROM openjdk:8
USER root
COPY ./server/preload/* /loaded/
WORKDIR ./server

RUN apt-get update && \
    apt-get install dos2unix && \
    apt-get install python3 && \
    apt-get clean

CMD cp ../loaded/* . && dos2unix ./launch.sh && ./jack_start_server.sh


