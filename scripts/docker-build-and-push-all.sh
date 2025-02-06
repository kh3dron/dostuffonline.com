services=$(ls services)

for service in ${services[@]}; do
    cd services/$service
    ./deploy.sh
    
    cd -
done
