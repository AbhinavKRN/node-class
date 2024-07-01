const fs = require('fs');
const path = require("path");



const http = require('http');
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    
    fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
        if (err) {
            res.writeHead(500);
            res.end('Error loading index.html');
        } else {
            res.writeHead(200);
            res.end(data);
        }
    });
});

const port = 3000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server is listening on http://${host}:${port}`);
});