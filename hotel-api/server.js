const jsonServer = require('json-server');
const lodash = require('lodash');
const server = jsonServer.create();
const middleWares = jsonServer.defaults();
const port = 8000;
const hotels = require('./static/hotels.json');
const rooms = require('./static/rooms.json');
const users = require('./static/users.json');

server.use(jsonServer.bodyParser);
server.use(middleWares);

server.get('/hotels', async (req, res) => {
    if (req.method === 'GET') {
        if (hotels.length !== 0) {
            res.status(200).jsonp(hotels);
        } else {
            res.status(404).jsonp({ error: 'not found' });
        }
    }
});

server.get('/hotels/:id', async (req, res) => {
    if (req.method === 'GET') {
        const result = hotels.find(el => String(el.id) === String(req.params.id) );
        console.warn(result)
        if (result) {
            res.status(200).jsonp(result);
        } else {
            res.status(404).jsonp({ error: 'not found' });
        }
    }
});

server.get('/rooms/:id', (req, res) => {
    if (req.method === 'GET') {
        let result = rooms.find(el => String(el.id) === String(req.params.id) );
        if (result) {
            res.status(200).jsonp(result);
        } else {
            res.status(404).jsonp({ error: 'not found' });
        }
    }
});

server.get('/users/:id', (req, res) => {
    if (req.method === 'GET') {
        if (users) {
            res.status(200).jsonp(users);
        } else {
            res.status(404).jsonp({ error: 'not found' });
        }
    }
});

server.listen(port);
console.log(`> Server is Ready on http://localhost:${port}`); // eslint-disable-line no-console








