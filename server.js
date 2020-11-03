
const fs = require('fs')
const http = require('http');
const port = process.env.PORT || 3000;
const routes = require('./routes.js');


const server = http.createServer(routes.requestListener);

server.listen(port, function (error) {
    if (error) {
        console.log('Something went wrong, error', error)
    } else {

        console.log('Server is listening on port'+ port )
    }


})