#!/bin/bash
docker stop dostuffonline-addition
docker rm dostuffonline-addition
docker build -t dostuffonline/addition:latest .
docker run -d --name dostuffonline-addition -p 10000:10000 dostuffonline/addition:latest
