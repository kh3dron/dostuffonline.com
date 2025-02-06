#!/bin/bash
docker stop dostuffonline-traceroute
docker rm dostuffonline-traceroute
docker build -t dostuffonline/traceroute:latest .
docker run -d --name dostuffonline-traceroute -p 11001:11001 dostuffonline/traceroute:latest
