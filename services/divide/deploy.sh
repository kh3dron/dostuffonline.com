#!/bin/bash
docker stop dostuffonline-divide
docker rm dostuffonline-divide
docker build -t dostuffonline/divide:latest .
docker run -d --name dostuffonline-divide -p 10003:10003 dostuffonline/divide:latest
