const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = Number(process.env.PORT || 4173);
const ROOT = path.resolve(__dirname, '..');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.md': 'text/markdown; charset=utf-8',
};

function send(res, statusCode, body, contentType = 'text/plain; charset=utf-8') {
  res.writeHead(statusCode, {
    'Content-Type': contentType,
    'Cache-Control': 'no-store',
  });
  res.end(body);
}

function resolvePath(urlPath) {
  const cleanPath = decodeURIComponent(urlPath.split('?')[0]);
  const relativePath = cleanPath === '/' ? '/index.html' : cleanPath;
  const filePath = path.resolve(ROOT, `.${relativePath}`);
  if (!filePath.startsWith(ROOT)) {
    return null;
  }
  return filePath;
}

const server = http.createServer((req, res) => {
  const filePath = resolvePath(req.url || '/');
  if (!filePath) {
    send(res, 403, 'Forbidden');
    return;
  }

  fs.stat(filePath, (statError, stats) => {
    if (statError || !stats.isFile()) {
      send(res, 404, 'Not found');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    const stream = fs.createReadStream(filePath);

    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': 'no-store',
    });

    stream.on('error', () => {
      send(res, 500, 'Server error');
    });

    stream.pipe(res);
  });
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`Junimo Perfection Journal test server running at http://127.0.0.1:${PORT}`);
});
