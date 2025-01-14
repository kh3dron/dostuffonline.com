#!/bin/bash
docker stop webtools-multiply
docker rm webtools-multiply
docker build -t webtools/multiply:latest .
docker run -d --name webtools-multiply -p 10002:10002 webtools/multiply:latest
