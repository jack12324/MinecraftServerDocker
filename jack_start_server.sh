#!/bin/bash
echo "RESTART_CONTAINER_ON_STOP is set to $RESTART_CONTAINER_ON_STOP"
while true 
do
	echo "Starting launch.sh"
	./launch.sh
	if [ "$RESTART_CONTAINER_ON_STOP" -eq "1" ]
	then
	  echo "Server Stopped, exiting script"
	  break
	fi
	read -n 1 -t 15 -r -p "Server Stopped. Restarting in 15 seconds, hit any key to exit"
	if [ ! $? -gt 128 ] 
	then 
		break
	fi
done