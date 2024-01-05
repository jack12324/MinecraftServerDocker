#!/bin/bash
while true 
do
	echo "Starting Server"
	cd vanilla || exit
	./launch.sh
	echo
	read -n 1 -t 15 -r -p "Server Stopped. Restarting in 15 seconds, hit any key to exit" stop
	if [ ! $? -gt 128 ] 
	then 
		break
	fi
echo "\n$stop\n"
done