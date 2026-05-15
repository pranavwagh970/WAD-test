const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const publicFolder = path.join(__dirname, 'public');

const contentTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript'
};

const server = http.createServer((req, res) => {
  const requestedFile = req.url === '/' ? 'index.html' : req.url;
  const filePath = path.join(publicFolder, requestedFile);
  const extension = path.extname(filePath);
  const contentType = contentTypes[extension] || 'text/plain';

  fs.readFile(filePath, (error, content) => {
    if (error) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('<h1>404 - File Not Found</h1>');
      return;
    }

    res.writeHead(200, { 'Content-Type': contentType });
    res.end(content);
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
