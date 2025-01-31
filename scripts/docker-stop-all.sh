for service in $(ls services); do
    docker stop dostuffonline-$service
    docker rm dostuffonline-$service
done
