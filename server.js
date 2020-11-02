
const fs = require('fs')
const http = require('http');
const port = process.env.PORT || 3000;

const server=http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('./Main.html', function (error, data) {
        if (error) {
            res.writeHead(404)
            res.write('Error:File Not Found')
        } else {
            res.write(data)
        }
        res.end()
    })

})

server.listen(port, function (error) {
    if (error) {
        console.log('Something went wrong, error', error)
    } else {

        console.log('Server is listening on port'+ port )
    }


})