#!/bin/bash
docker stop webtools-divide
docker rm webtools-divide
docker build -t webtools/divide:latest .
docker run -d --name webtools-divide -p 10003:10003 webtools/divide:latest
