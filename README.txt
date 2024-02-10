To run:
edit server start file to be named launch.sh
remove any pause logic at the end of launch.sh, the image will handle the restart loop
add .env file to this folder with the required params (below)
run docker compose up --build

JAVA_VERSION [int] (required)
    version of openjdk to install
SERVER_PATH [string] (required)
    path to server folder w.r.t. docker-compose.yml.
    e.g. if the .yml file and server are in the same directory this should be SERVER_PATH=./divine-journey-2
RCON_WEB_PORT [int] (required)
    This is the port the RCON web gui will run on.
RCON_WEBHOOK_PORT [int] (required)
    This is the port the RCON webhook will run on. MUST be RCON_WEB_PORT + 1
RESTART_CONTAINER_ON_STOP [1,0] (optional, default 1)
    if 1 this will allow the server script to exit (shutting down the container) on a server stop.
    restart is set to 'unless-stopped' in the docker-compose so the container will come back up.
    if 0 (or anything besides 1) this will cause the script to restart the server itself without bringing the container down
RCON_ENABLED [1,0] (optional, default 1)
    set 1 to enable server management via RCON
RCON_PORT [number] (optional, default 25575)
    the port RCON access will be mapped to
RCON_PASSWORD [string] (required if RCON_ENABLED is 1)
    password to access server via RCON
RWA_PASSWORD [string] (required)
    password for admin user to access web ui
TZ [ubuntu timezone] (optional, default: standard time)
    sets the timezone for the rcon service, which will affect any scheduled commands
    see https://manpages.ubuntu.com/manpages/focal/man3/DateTime::TimeZone::Catalog.3pm.html for valid timezones
RESTART_HOUR [number] (optional, default 3)
    hour server will restart
RESTART_MINUTE [number] (optional, default 30)
    minute server will restart

If java has permission issues try cp -r on server folder on windows
