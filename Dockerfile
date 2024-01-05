FROM openjdk:8
COPY ./jack_start_server.sh ./server
USER root
WORKDIR /server
CMD  ./jack_start_server.sh