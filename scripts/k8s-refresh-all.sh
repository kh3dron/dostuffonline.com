kubectl delete -f k8s/*.yaml

for service in $(ls services); do
    for file in services/$service/k8s; do
        kubectl apply -f $file
    done
done