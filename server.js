const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {

  let filePath = './template' + (req.url === '/' ? '/index.html' : req.url);

  if (!path.extname(filePath)) {
    filePath += '.html';
  }

  const extname = path.extname(filePath);
  let contentType = 'text/html; charset=utf-8';
  if (extname === '.css') {
    contentType = 'text/css; charset=utf-8';
  } else if (extname === '.js') {
    contentType = 'application/javascript; charset=utf-8';
  }

  fs.exists(filePath, (exists) => {
    if (exists) {
      res.writeHead(200, {'Content-Type': contentType});
      const stream = fs.createReadStream(filePath);
      stream.pipe(res);
    } else {
      res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});
      const errorStream = fs.createReadStream('./template/error.html');
      errorStream.pipe(res);
    }
  });
});

const PORT = 3000;
const HOST = 'localhost';

server.listen(PORT, HOST, () => {
  console.log(`OK, server via next url: http://${HOST}:${PORT}`);
});
