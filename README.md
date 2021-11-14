# pizza-delivery

A Vue based UI enables you to choose one ore more pizzas to order (no real world order).
It also provides the feature to add new pizzas to the catalogue.

Note: There seems to be some trouble with the vuetify alpha for vue 3, so that the input fields in the form are not visible. Despite some things that are currently not working well in this vuetify version.

The UI works with a containerized backend which can also be found on github.

## Overview
![Overview](/components.PNG)

### deliverybackend
[Deliverybackend](https://github.com/dennisgassner/deliverybackend) provides a rest interfaces to list all available pizzas and them details, such as the price, image etc. The pizza-data is stored in a mongo database, **[deliverymongo](https://github.com/dennisgassner/deliverymongo)**

### deliveryauth
To access the deliverybackend's rest interface, an oauth authentification is necessary. A keycloak server, [deliveryauth](https://github.com/dennisgassner/deliveryauth), is used as the authentification server.

### dockerproxy
Because the deliveryauth server is hosted as a docker container, the Vue UI is calling him by localhost to generate a authentification token. But deliverybackend is calling it by its docker container name, so deliverykeycloak. This leads to an error because the token's issuer is localhost - and therefore not the same server name used to validate the token. To cope with this issue just resulting from the fact, that in this no-real-world-scenario the authentification server and the ui are located on the same host, I created a proxy server, [dockerproxy](https://github.com/dennisgassner/dockerproxy), that passes the requests. By this way the request to generate a new token is passed to deliveryauth no longer as localhost. This proxy is able to use it generally in other projects.

### pizzamanagement
The Vue UI enables users to add new pizzas to the list of orderable pizzas that are stores in deliverymongo. [Pizzamanagement](https://github.com/dennisgassner/pizzamanagement) offers a graphql interface to show all available pizzas and to add a new one.

### docker-compose
The docker-compose.yml file located in the root of this repository enables you to simply start the whole backend pre-configured. Informations about how to generate the necessary docker containers are located in the respective repositories.
