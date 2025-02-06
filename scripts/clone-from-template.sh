#!/bin/bash

# This script clones the dig service template and replaces the name, port, and namespace.

NAME=$1
PORT=$2
NAMESPACE=$3

# Check if any of the required arguments are missing
if [ -z "$NAME" ] || [ -z "$PORT" ] || [ -z "$NAMESPACE" ]; then
    echo "Usage: $0 <name> <port> <namespace>"
    exit 1
fi

# Copy simple template and replace
mkdir -p services/$NAME
cp -r services/dig/* services/$NAME/
find services/$NAME -type f -exec sed -i '' "s/dig/$NAME/g" {} +
find services/$NAME -type f -exec sed -i '' "s/11000/$PORT/g" {} +
find services/$NAME -type f -exec sed -i '' "s/networking/$NAMESPACE/g" {} +
echo "Service $NAME cloned successfully."

# update portmap 
echo $PORT $NAMESPACE:$NAME >> ../docs/portmap.md
sort -o ../docs/portmap.md ../docs/portmap.md
