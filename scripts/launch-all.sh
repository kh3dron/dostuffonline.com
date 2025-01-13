services=(frontend addition subtraction)

for service in ${services[@]}; do
    cd services/$service
    ./deploy.sh
    cd -
done
