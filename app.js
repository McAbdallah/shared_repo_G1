// app.js
const http = require('http');

const hostname = '0.0.0.0'; // Binding to 0.0.0.0 allows access from outside the container
const port = 8081;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
