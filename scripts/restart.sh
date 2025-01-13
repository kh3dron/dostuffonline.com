for service in $(ls services); do
    cd services/$service
    ./deploy.sh
    cd -
done
