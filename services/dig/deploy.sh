#!/bin/bash
docker stop dostuffonline-dig
docker rm dostuffonline-dig
docker build -t dostuffonline/dig:latest .
docker run -d --name dostuffonline-dig -p 11000:11000 dostuffonline/dig:latest
