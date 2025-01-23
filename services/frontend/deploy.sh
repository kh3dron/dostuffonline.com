#!/bin/bash
docker stop dostuffonline-frontend
docker rm dostuffonline-frontend
docker build -t dostuffonline/frontend:latest .
docker run -d --name dostuffonline-frontend -p 9999:9999 dostuffonline/frontend:latest
