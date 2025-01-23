#!/bin/bash
docker stop dostuffonline-multiply
docker rm dostuffonline-multiply
docker build -t dostuffonline/multiply:latest .
docker run -d --name dostuffonline-multiply -p 10002:10002 dostuffonline/multiply:latest
