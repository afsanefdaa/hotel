## Client side

It's a create-react-app base project. For running it:

`yarn start` 
* navigate to localhost:3000
* admin page => /admin
* the logged in user data is stored in redux
* for admin add and remove hotels I used redux because 
of lack of time I couldn't provide a small db

## Back end side
This app  uses json-server to serve data. It uses faker.js to generate mock up data. For running it:

`yarn start` 
* runs on port 8000

## Images
I used https://unsplash.com/ for images and google fonts so 
make sure you are connected to the network.

## Todos
* filters form requires validation
* create hotel form requires validation
* use a small db like lowdb compatible with json-server to add and remove hotel
