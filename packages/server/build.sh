#!/bin/bash
echo 'Provide tag Name:'
read tagname
docker build -t reachjalil/demo:server_$tagname . --no-cache
docker push reachjalil/demo:server_$tagname
