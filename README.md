# location-filter-service

An API service which returns a list of users who are listed as either living in London, or whose current coordinates are within 50 miles of London.

# Service requirements

- node.js v10+
- npm v7+

# Start the service

To start the service, navigate to the project root directory and run the following commands:

- `$ npm  install` to install service dependencies, then
- `$ npm  start` to start the service

The service will start on the `localhost` on port `3000` 

You can access the service at the following url http://localhost:3000/

# Endpoints

`GET /users` - The application exposes a single endpoint which will retrieve users who are listed as located in london and users located within 50 miles of london.  The data will be returned in JSON format.  Once the service has started the endpoint can be accessed at http://localhost:3000/users