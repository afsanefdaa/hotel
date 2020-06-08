const jsonServer = require('json-server');
const server = jsonServer.create();
const middleWares = jsonServer.defaults();
const port = 8000;
const generateData = require('./dataGenerator');
const allRooms = generateData.hotels.map(el => el.rooms);
// convert array of arrays to one array
const rooms = [].concat.apply([], allRooms);

server.use(jsonServer.bodyParser);
server.use(middleWares);

server.get('/hotels', (req, res) => {
    if (req.method === 'GET') {
        let result = generateData.hotels;
        if (result) {
            res.status(200).jsonp(result);
        } else {
            res.status(404).jsonp({ error: 'not found' });
        }
    }
});

server.get('/hotels/:id', (req, res) => {
    if (req.method === 'GET') {
        let result = generateData.hotels.find(el => String(el.id) === String(req.params.id) );
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
        let result = generateData.users;
        if (result) {
            res.status(200).jsonp(result);
        } else {
            res.status(404).jsonp({ error: 'not found' });
        }
    }
});

server.listen(port);







