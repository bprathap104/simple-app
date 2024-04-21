// server.js
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    fs.readFile('/home/frontend/src/index.html', (err, data) => {
      if (err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  } else {
    res.writeHead(404);
    res.end('Page not found');
  }
});

const port = 3000;
server.listen(port,"127.0.0.1");
