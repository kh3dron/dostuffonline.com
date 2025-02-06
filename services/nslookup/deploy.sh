#!/bin/bash
docker stop dostuffonline-nslookup
docker rm dostuffonline-nslookup
docker build -t dostuffonline/nslookup:latest .
docker run -d --name dostuffonline-nslookup -p 11002:11002 dostuffonline/nslookup:latest
