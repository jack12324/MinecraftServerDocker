FROM itzg/rcon

#path is from compose file
COPY ./rcon/injectRestart.js .
COPY ./rcon/default-widgets.json .

ENTRYPOINT []

CMD (node ./injectRestart.js > injectRestart.log && cat injectRestart.log) & node src/main.js start
