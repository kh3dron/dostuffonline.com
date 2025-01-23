#!/bin/bash
docker stop dostuffonline-subtraction
docker rm dostuffonline-subtraction
docker build -t dostuffonline/subtraction:latest .
docker run -d --name dostuffonline-subtraction -p 10001:10001 dostuffonline/subtraction:latest
