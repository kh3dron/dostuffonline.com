#!/bin/bash
docker stop webtools-frontend
docker rm webtools-frontend
docker build -t webtools/frontend:latest .
docker run -d --name webtools-frontend -p 9999:9999 webtools/frontend:latest
