const http = require("http")
const PORT = 3000
const fs = require('fs');
const path= require('path');
const server = http.createServer((request, response) => {
    // [1]
    const { method, url, headers } = request

    // [2]
    if (method === "GET") {

        if (request.url === '/raw-html') {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write('<h1>welcome</h1>')
            response.end()

        }

        else if (request.url === '/users') {
            response.writeHead(200, { 'Content-Type': 'application/json' });
            const json = {
                name: 'chen',
                email: 'chen1661@gmail.com'
            }
            response.write(JSON.stringify(json));
             response.end()

        }
        else if(request.url === '/') {
            fs.readFile(path.join(__dirname,'./public/index.html'), null, function (error, data) {
                if (error) {
                    response.writeHead(404);
                    respone.write('Whoops! File not found!');
                } else {
                    response.writeHead(200, { 'Content-Type': 'text/html' });
                    response.write(data);
                }
                response.end();
            });
        }
        else if(request.url === '/index.css') {
            fs.readFile(path.join(__dirname,'./public/index.css'), null, function (error, data) {
                if (error) {
                    response.writeHead(404);
                    respone.write('Whoops! File not found!');
                } else {
                    response.writeHead(200, { 'Content-Type': 'text/css' });
                    response.write(data);
                }
                response.end();
            });
        }
        else if(request.url === '/index.js') {
            fs.readFile(path.join(__dirname,'./public/index.js'), null, function (error, data) {
                if (error) {
                    response.writeHead(404);
                    respone.write('Whoops! File not found!');
                } else {
                    response.writeHead(200, { 'Content-Type': 'text/javascript' });
                    response.write(data);
                }
                response.end();
            });
        }


    }
});

server.listen(PORT, error => {
    if (error) {
        return console.error(error)
    }

    console.log(`Server listening on port ${PORT}`)
});