pushd services/addition
docker buildx build --platform linux/amd64 \
  --push \
  -t 192.168.0.17:5000/webtools/addition:latest .
popd