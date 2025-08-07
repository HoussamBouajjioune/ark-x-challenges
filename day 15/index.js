const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  // Parse the URL
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;

  // Set the content type
  res.setHeader('Content-Type', 'application/json');

  // Define basic routes
  if (path === '/' && req.method === 'GET') {
    res.writeHead(200);
    res.end(JSON.stringify({ message: 'Welcome to the homepage!' }));
  } else if (path === '/about' && req.method === 'GET') {
    res.writeHead(200);
    res.end(JSON.stringify({ message: 'This is the about page.' }));
  } else if (path === '/contact' && req.method === 'GET') {
    res.writeHead(200);
    res.end(JSON.stringify({ message: 'Contact us at contact@example.com' }));
  } else {
    // Not found
    res.writeHead(404);
    res.end(JSON.stringify({ error: 'Route not found' }));
  }
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
