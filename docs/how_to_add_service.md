### How to add a new service

Eventually this should all be handled with better templates. for now:

- duplicate the template service, `/services/addition`
- write the new service in `src/`
- pick a new port and put in `docs/portmap.md`
- update the service's dockerfile, requirements.txt, or anything else needed to run service in a docker container
- update deploy.sh with new port and anything else to be compatible with the `/scripts/launch-all.sh` launcher

- in `/services/frontend`:
  - if this service is the first of a category:
    - create new route
  - add new interaction form to `src/views/pages/{page for category}`
  - add call to new service in `src/public/js/{category}.js`
