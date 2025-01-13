#!/bin/bash
docker stop webtools-addition
docker rm webtools-addition
docker build -t webtools/addition:latest .
docker run -d --name webtools-addition -p 10000:10000 webtools/addition:latest
