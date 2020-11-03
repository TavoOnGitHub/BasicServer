const fs = require('fs');


exports.requestListener = function (request, response) {
    console.log(request.url);
    switch (request.url) {
        case "/":
            let mainFile = fs.readFileSync('./Main.html');
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(mainFile);
            response.end();
            break;
        case "/index.js":
            response.setHeader("Content-Type", "application/javascript");
            let indexFile = fs.readFileSync('./index.js');
            response.write(indexFile);
            response.end()
            break;
        default:
            response.writeHead(404);
            response.end();    
    }
}