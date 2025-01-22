# dostuffonline.com

dostuffonline.com is a simple site that hosts a wide range of tools - things like file conversions, video transcription, network testing tools, and so on. Anything for which you'd google "${to task} online" and hope to find some small utility. 

# Architecture 

This app is overengineered on purpose. Each tool will be its own microservice called by the frontend. This gives be an excuse to run a kubernetes cluster. 

# Run Locally 

Each service has a deploy.sh in it's `/services/${service}` directory. That script will build and launch each service as a local docker container. You can run them all at once with `/scripts/launch-all.sh`. 

# Access Globally 

This app is not up yet! how humiliating. 
It will soon be running on my R53 + Caddy + EC2 free tier stack.