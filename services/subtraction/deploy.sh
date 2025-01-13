#!/bin/bash
docker stop webtools-subtraction
docker rm webtools-subtraction
docker build -t webtools/subtraction:latest .
docker run -d --name webtools-subtraction -p 10001:10001 webtools/subtraction:latest
