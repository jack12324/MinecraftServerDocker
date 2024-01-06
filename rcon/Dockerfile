FROM itzg/rcon

#path is from compose file
COPY ./rcon/preload/* .

ENTRYPOINT []

CMD (node ./injectRestart.js > injectRestart.log && cat injectRestart.log) & node src/main.js start
